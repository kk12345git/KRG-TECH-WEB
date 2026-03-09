"use server";

import { db as prisma } from './db';
import { revalidatePath } from 'next/cache';

// ==========================================
// DATA FETCHING QUERIES (Prisma)
// ==========================================

export async function getCategories() {
    return await prisma.category.findMany({
        orderBy: { name: 'asc' }
    });
}

export async function getProducts() {
    return await prisma.product.findMany({
        include: { category: true },
        orderBy: { title: 'asc' }
    });
}

export async function getBanners() {
    return await prisma.banner.findMany({
        where: { isActive: true },
        orderBy: { createdAt: 'desc' }
    });
}

export async function getStats() {
    return await prisma.stat.findMany({
        orderBy: { order: 'asc' }
    });
}

// ==========================================
// ADMIN MUTATION ACTIONS (Prisma)
// ==========================================

export async function updateBanners(banners) {
    try {
        await prisma.banner.deleteMany({});
        if (banners && banners.length > 0) {
            await prisma.banner.createMany({
                data: banners.map(b => ({
                    title: b.title || '',
                    subtitle: b.subtitle || '',
                    image: b.image || '',
                    link: b.link || '/',
                    placement: b.placement || 'home',
                    isActive: b.isActive !== false
                }))
            });
        }
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        console.error('Failed to update banners:', error);
        return { success: false, error: 'Failed to persist banner data to Database' };
    }
}

export async function updateCategories(categories) {
    try {
        // Bulk upsert sequentially to ensure constraints
        for (const cat of categories) {
            await prisma.category.upsert({
                where: { slug: cat.id || cat.slug },
                update: {
                    name: cat.name,
                    description: cat.description || '',
                    image: cat.image || '',
                },
                create: {
                    slug: cat.id || cat.slug,
                    name: cat.name,
                    description: cat.description || '',
                    image: cat.image || '',
                }
            });
        }
        revalidatePath('/');
        revalidatePath('/products');
        return { success: true };
    } catch (error) {
        console.error('Failed to update categories:', error);
        return { success: false, error: 'Failed to persist category data to Database' };
    }
}

export async function updateStats(stats) {
    try {
        await prisma.stat.deleteMany({});
        if (stats && stats.length > 0) {
            await prisma.stat.createMany({
                data: stats.map((s, idx) => ({
                    name: s.name,
                    value: s.value,
                    order: idx + 1
                }))
            });
        }
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        console.error('Failed to update stats:', error);
        return { success: false, error: 'Failed to persist stats data to Database' };
    }
}

export async function updateProducts(products) {
    try {
        for (const prod of products) {
            // Check if product exists physically
            const existing = await prisma.product.findFirst({ where: { OR: [{ id: prod.id }, { title: prod.name }] } });

            if (existing) {
                await prisma.product.update({
                    where: { id: existing.id },
                    data: {
                        title: prod.name || prod.title,
                        description: prod.description || existing.description,
                        image: prod.image || existing.image,
                        specs: {
                            material: prod.material,
                            size: prod.size,
                            sterilization: prod.sterilization,
                            moq: prod.moq,
                            features: prod.features
                        }
                    }
                });
            } else {
                await prisma.product.create({
                    data: {
                        id: prod.id || undefined,
                        title: prod.name || prod.title,
                        description: prod.description || '',
                        image: prod.image || '',
                        price: null,
                        category: {
                            connect: { slug: prod.category || prod.categoryId }
                        },
                        specs: {
                            material: prod.material,
                            size: prod.size,
                            sterilization: prod.sterilization,
                            moq: prod.moq,
                            features: prod.features
                        }
                    }
                });
            }
        }
        revalidatePath('/products');
        revalidatePath('/category/[id]');
        return { success: true };
    } catch (error) {
        console.error('Failed to update products:', error);
        return { success: false, error: 'Failed to persist product data to Database' };
    }
}
