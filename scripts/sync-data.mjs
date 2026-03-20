import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();

async function main() {
    console.log('--- Starting KRG Medifabb Data Sync ---');

    // Load Data
    const categoriesRoot = path.join(__dirname, '..', 'src', 'data', 'categories.json');
    const productsRoot = path.join(__dirname, '..', 'src', 'data', 'products.json');

    const categories = JSON.parse(fs.readFileSync(categoriesRoot, 'utf-8'));
    const products = JSON.parse(fs.readFileSync(productsRoot, 'utf-8'));

    // 1. Sync Categories
    console.log(`Syncing ${categories.length} categories...`);
    for (const cat of categories) {
        await prisma.category.upsert({
            where: { slug: cat.id },
            update: {
                name: cat.name,
                description: cat.description || '',
                image: cat.image || '',
            },
            create: {
                slug: cat.id,
                name: cat.name,
                description: cat.description || '',
                image: cat.image || '',
            }
        });
    }

    // 2. Sync Products
    console.log(`Syncing ${products.length} products...`);
    // Get all categories to map slugs to IDs
    const dbCategories = await prisma.category.findMany();
    const catMap = dbCategories.reduce((acc, cat) => {
        acc[cat.slug] = cat.id;
        return acc;
    }, {});

    for (const prod of products) {
        const categoryId = catMap[prod.category];
        if (!categoryId) {
            console.warn(`Skipping product ${prod.name}: Category ${prod.category} not found in DB`);
            continue;
        }

        await prisma.product.upsert({
            where: { id: prod.id }, // Assuming ID matches. If not, we might need a different unique field or search by title.
            // Wait, JSON id matches Prisma ID if we keep them synced. 
            // If prisma generated UUIDs previously, we might need to search by title to avoid duplicates.
            update: {
                title: prod.name,
                description: prod.description || '',
                image: prod.image || '',
                categoryId: categoryId,
                specs: {
                    material: prod.material,
                    size: prod.size,
                    sterilization: prod.sterilization,
                    moq: prod.moq,
                    features: prod.features
                }
            },
            create: {
                id: prod.id,
                title: prod.name,
                description: prod.description || '',
                image: prod.image || '',
                categoryId: categoryId,
                specs: {
                    material: prod.material,
                    size: prod.size,
                    sterilization: prod.sterilization,
                    moq: prod.moq,
                    features: prod.features
                }
            }
        }).catch(async (e) => {
            // If upsert fails because we use a custom string ID but DB expects UUID or there's a conflict
            // Try searching by name
            const existing = await prisma.product.findFirst({ where: { title: prod.name }});
            if (existing) {
                await prisma.product.update({
                    where: { id: existing.id },
                    data: {
                        image: prod.image,
                        categoryId: categoryId,
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
                console.error(`Failed to sync product ${prod.name}: ${e.message}`);
            }
        });
    }

    console.log('--- Sync Complete ---');
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
