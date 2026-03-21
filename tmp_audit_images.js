const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const products = await prisma.product.findMany({
        include: { category: true }
    });
    
    const needsImage = products.filter(p => 
        !p.image || 
        p.image.includes('unsplash.com') || 
        p.image === ''
    );
    
    console.log(`Total Products: ${products.length}`);
    console.log(`Products needing images: ${needsImage.length}`);
    
    const byCategory = {};
    needsImage.forEach(p => {
        const catName = p.category ? p.category.name : 'Unknown';
        if (!byCategory[catName]) byCategory[catName] = [];
        byCategory[catName].push({
            id: p.id,
            title: p.title,
            description: p.description
        });
    });
    
    console.log(JSON.stringify(byCategory, null, 2));
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
