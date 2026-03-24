import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const categories = await prisma.category.findMany()
  console.log('--- CATEGORIES ---')
  categories.forEach(c => {
    console.log(`${c.slug} | ${c.name} | ${c.id}`)
  })
}

main().finally(() => prisma.$disconnect())
