const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
    { id: 'fa31e241-1f5c-4b52-89b6-d1bb199c3351', image: '/images/products/mini-drape-pack.png' },
    { id: '57138e74-1076-413e-836c-e12f13d31326', image: '/images/products/knee-arthroscopy.png' },
    { id: '774b15a5-8f5f-4578-8b00-34497de984da', image: '/images/products/shoulder-arthroscopy.png' },
    { id: 'dd9e7daa-86fd-4dbc-8993-daa9f3268a39', image: '/images/products/hiv-protection-drape-kit.png' },
    { id: 'c70faf9e-e5ca-4018-8b2f-91fa0eec3ade', image: '/images/products/universal-drape-pack.png' },
    { id: '2962a7e2-c961-4251-bf18-773c25d05f59', image: '/images/products/ortho-drape-pack.png' },
    { id: 'cc7e8625-cae8-4bc5-b0cc-3803ee4bc535', image: '/images/products/hb-sag-drape-pack.png' },
    { id: '6060e8e6-8242-4fb2-bd2e-43d76c7de3ef', image: '/images/products/dnc-drape-kit.png' },
    { id: 'abbcc0ef-5871-42d2-a856-93a15aa47de5', image: '/images/products/hystro-lap-pouch.png' },
    { id: 'b28f6f95-599f-4fd7-97ff-3a071132ad83', image: '/images/products/perineal-drape-kit.png' },
    { id: 'c35bafe6-469a-45be-80f2-499d3c9d53b4', image: '/images/products/delivery-drape-pack.png' },
    { id: '89cc3a57-7403-4b49-acee-c2f154277782', image: '/images/products/maternity-mat.png' },
    { id: '3ccd1ced-04a3-445e-a61e-dcd9c895570f', image: '/images/products/gen-surgical-drape-pack.png' },
    { id: '3a6e06c5-885c-4c13-9e36-847a0037a0d3', image: '/images/products/lscs-drape-pack.png' }
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
