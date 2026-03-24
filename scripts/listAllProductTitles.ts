import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const products = await prisma.product.findMany({
    select: { id: true, title: true, sku: true }
  })
  console.log('--- ALL PRODUCTS IN DB ---')
  products.forEach(p => {
    console.log(`${p.sku || 'NO-SKU'} | ${p.title} | ${p.id}`)
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
