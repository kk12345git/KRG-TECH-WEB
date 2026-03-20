const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
    console.log('Connecting to database...');
    console.log('DB URL:', process.env.DATABASE_URL ? 'Loaded' : 'NOT LOADED');
    
    try {
        const categories = await prisma.category.findMany({
            include: {
                _count: {
                    select: { products: true }
                }
            }
        });

        console.log('--- Database Verification ---');
        if (categories.length === 0) {
            console.log('No categories found.');
        } else {
            categories.forEach(cat => {
                console.log(`Category: ${cat.name} (${cat.slug}) - Products: ${cat._count.products}`);
            });
        }

        const totalProducts = await prisma.product.count();
        console.log(`Total Products in DB: ${totalProducts}`);

        const sampleProducts = await prisma.product.findMany({
            take: 5,
            select: { title: true }
        });
        console.log('--- Sample Products ---');
        sampleProducts.forEach(p => console.log(`- ${p.title}`));

    } catch (err) {
        console.error('Error during verification:', err);
    }
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
