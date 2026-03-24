import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const skusToCheck = ['001039SMS', '002002SAI', '003009NAH']
  for (const sku of skusToCheck) {
    const product = await prisma.product.findFirst({
      where: { sku: sku }
    })
    console.log(`SKU: ${sku}, variantGroup: ${product?.variantGroup}, variantLabel: ${product?.variantLabel}`)
  }
  await prisma.$disconnect()
}
main()
