const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    await prisma.product.update({
        where: { id: 'eeec4a23-6673-4d4b-97a8-967eb07c90c3' },
        data: { image: '/images/products/gown-sms-standard.png' }
    });
    console.log('Updated Surgeon Gown in DB.');
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
