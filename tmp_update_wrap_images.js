const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
    { id: 'sms-sterilization-wrap-blue', image: '/images/products/sms-sterilization-wrap-blue.png' },
    { id: 'sequential-sterilization-wrap', image: '/images/products/sequential-sterilization-wrap.png' },
    { id: '2fa6a108-38fe-43e3-80ca-6dad007688ac', image: '/images/products/sms-sterilization-wrap-green.png' }
];

async function main() {
    for (const item of updates) {
        await prisma.product.update({
            where: { id: item.id },
            data: { image: item.image }
        });
        console.log(`Updated ${item.id} -> ${item.image}`);
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
