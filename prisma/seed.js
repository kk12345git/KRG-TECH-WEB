const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function main() {
    console.log('Starting seed...');

    const dataDir = path.join(process.cwd(), 'src', 'data');
    const categoriesData = JSON.parse(fs.readFileSync(path.join(dataDir, 'categories.json'), 'utf-8'));
    const productsData = JSON.parse(fs.readFileSync(path.join(dataDir, 'products.json'), 'utf-8'));

    console.log(`Seeding ${categoriesData.length} categories...`);

    // Seed Categories
    for (const cat of categoriesData) {
        await prisma.category.upsert({
            where: { slug: cat.id },
            update: {},
            create: {
                slug: cat.id,
                name: cat.name,
                description: cat.longDescription || cat.description,
                image: cat.image,
            },
        });
    }

    console.log(`Seeding ${productsData.length} products...`);

    // Seed Products
    for (const prod of productsData) {
        try {
            await prisma.product.create({
                data: {
                    title: prod.name,
                    description: prod.description || '',
                    image: prod.image || '',
                    price: null,
                    category: {
                        connect: { slug: prod.category }
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
        } catch (e) {
            console.warn(`Failed to seed product ${prod.name}: ${e.message}`);
        }
    }

    // Banners and Stats (Defaults for the DB)
    await prisma.stat.createMany({
        data: [
            { name: 'Surgical End-Users', value: '450+', order: 1 },
            { name: 'Countries Exported', value: '14+', order: 2 },
            { name: 'Quality Certifications', value: '7', order: 3 },
            { name: 'Manufacturing Area', value: '25,000 sq ft', order: 4 }
        ],
        skipDuplicates: true
    });

    console.log('Seed completed successfully.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
