"use server";

import fs from 'fs/promises';
import path from 'path';
import { revalidatePath } from 'next/cache';

const DATA_DIR = path.join(process.cwd(), 'src', 'data');

async function writeDataFile(filename, data) {
    const filePath = path.join(DATA_DIR, filename);
    await fs.writeFile(filePath, JSON.stringify(data, null, 4), 'utf8');
}

export async function updateBanners(banners) {
    try {
        await writeDataFile('banners.json', banners);
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        console.error('Failed to update banners:', error);
        return { success: false, error: 'Failed to persist banner data' };
    }
}

export async function updateCategories(categories) {
    try {
        await writeDataFile('categories.json', categories);
        revalidatePath('/');
        revalidatePath('/products');
        return { success: true };
    } catch (error) {
        console.error('Failed to update categories:', error);
        return { success: false, error: 'Failed to persist category data' };
    }
}

export async function updateStats(stats) {
    try {
        await writeDataFile('stats.json', stats);
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        console.error('Failed to update stats:', error);
        return { success: false, error: 'Failed to persist stats data' };
    }
}

export async function updateProducts(products) {
    try {
        await writeDataFile('products.json', products);
        revalidatePath('/products');
        revalidatePath('/category/[id]'); // Revalidate all category pages
        return { success: true };
    } catch (error) {
        console.error('Failed to update products:', error);
        return { success: false, error: 'Failed to persist product data' };
    }
}
