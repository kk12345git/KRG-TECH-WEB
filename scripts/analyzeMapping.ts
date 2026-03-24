import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import fs from 'fs'
import path from 'path'

async function main() {
  const productsData = JSON.parse(fs.readFileSync('src/data/products.json', 'utf8'))
  const variantGroups = [
    'general-drape-pack', 'mini-drape-pack', 'lscs-caesarean-drape-pack', 
    'ortho-drape-pack', 'cabg-drape-pack', 'delivery-drape-pack',
    'laproscopy-drape-pack', 'dc-drape-pack', 'ivf-egg-collection-drape-pack',
    // ... etc
  ]
  
  console.log('--- MAPPING CHECK ---')
  for (const group of variantGroups) {
    const match = productsData.find(p => p.id === group || p.id.includes(group.split('-')[0]))
    console.log(`${group} -> ${match ? match.title + ' (' + match.id + ')' : 'NO MATCH'}`)
  }
  await prisma.$disconnect()
}
main()
