import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const keywordsToDelete = [
  "Bariatric", "Colorectal", "Dental", "Dermatology", "ENT", 
  "Oncology", "Ophthalmology", "Pediatric", "Plastic Surgery", 
  "Podiatry", "Veterinary", "Pain Management", "Radiology", 
  "Vascular Surgery"
]

const productTitleUpdates = [
  { sku: '001039SMS', title: 'General Drape Pack' },
  { sku: '001039SAV', title: 'General Drape Pack' },
  { sku: '001039CTN', title: 'General Drape Pack' },
  { sku: '001042PDA', title: 'Mini Drape Pack' },
  { sku: '002002SAI', title: 'LSCS Caesarean Drape Pack' },
  { sku: '002002PNG', title: 'LSCS Caesarean Drape Pack' },
  { sku: '002002SRH', title: 'LSCS Caesarean Drape Pack' },
  { sku: '003009NAH', title: 'Ortho Drape Pack' },
  { sku: '003009FOR', title: 'Ortho Drape Pack' },
  { sku: '003009SUG', title: 'Ortho Drape Pack' },
  { sku: '003009DVK', title: 'Ortho Drape Pack' },
  { sku: '003009SAI', title: 'Ortho Drape Pack' },
  { sku: '5007PMS', title: 'CABG Drape Pack' },
  { sku: '5007VMC', title: 'CABG Drape Pack' },
  { sku: '002004NFU', title: 'Delivery Drape Pack' },
  { sku: '002004SSS', title: 'Delivery Drape Pack' },
  { sku: '002014PNG', title: 'Laproscopy Drape Pack' },
  { sku: '002014SKS', title: 'Laproscopy LAVH Drape Pack' },
  { sku: '002006JYM', title: 'D&C Drape Pack' },
  { sku: '002006PNG', title: 'D&C Drape Pack' },
  { sku: '002009CFB', title: 'IVF Egg Collection Drape Pack' },
  { sku: '002009GEN', title: 'IVF Egg Collection Drape Pack' },
  { sku: '002005MDI', title: 'Perineal Procedure Pack' },
  { sku: '004001GEN', title: 'Urology Drape Pack' },
  { sku: '002007GEN', title: 'Embryo Transfer Pack' },
  { sku: '002013ARC', title: 'OCR-ET Drape Pack' },
  { sku: '0010037SKS', title: 'HB SAG Drape Pack' },
  { sku: '005005VJO', title: 'Angio Drape Pack' },
  { sku: '006006AHC', title: 'Neurology Drape Pack' },
  { sku: '001037KAU', title: 'HIV Drape Pack' },
  { sku: '002012SAI', title: 'Hystrolap Pouch' },
  { sku: '003003PMR', title: 'TKR Drape Pack' },
  { sku: '003005PRM', title: 'THR Drape Pack' },
  { sku: '003004PRM', title: 'Hip U Drape' },
  { sku: '003001PRM', title: 'Knee O Drape Pack' },
  { sku: '003011CTN', title: 'Knee Arthroscopy Drape' },
  { sku: '003012CTN', title: 'Shoulder Arthroscopy Drape' },
  { sku: '001003STD', title: 'Surgeon Gown Standard' },
  { sku: '001003XXL', title: 'Surgeon Gown Wraparound' },
  { sku: '001003RFD', title: 'Surgeon Gown Wraparound Reinforced' },
  { sku: '001003SFD', title: 'Surgeon Gown Standard Reinforced' },
  { sku: '001003WFD', title: 'Surgeon Gown Body Reinforced' },
  { sku: '001003BFD', title: 'Surgeon Gown Standard Body Reinforced' },
  { sku: '001003PSB', title: 'Isolation Gown' },
  { sku: '001002GEN', title: 'Patient Gown Standard' },
  { sku: '001002FSL', title: 'Patient Gown Full Sleeve' },
  { sku: '001002SLS', title: 'Patient Gown Sleeveless' },
  { sku: '001001GNA', title: 'Pre-Op Patient Wear Kit Model A' },
  { sku: '001001GNB', title: 'Pre-Op Patient Wear Kit Model B' },
  { sku: '001001GNC', title: 'Pre-Op Patient Wear Kit Model C' },
  { sku: '001001GND', title: 'Pre-Op Patient Wear Kit Model D' },
  { sku: '001008SMS', title: 'Disposable Bed Sheet with Pillow Cover - SMS' },
  { sku: '001008BLU', title: 'Disposable Bed Sheet with Pillow Cover - Blue' },
  { sku: '001008YEL', title: 'Disposable Bed Sheet with Pillow Cover - Yellow' },
  { sku: '001008PSB', title: 'Disposable Bed Sheet with Pillow Cover - PPSB' },
  { sku: '001007SMS', title: 'Examination Couch Sheet' },
  { sku: '001012SMF', title: 'Covering Sheet - SMS' }
]

async function main() {
  console.log('🚀 Starting Database Cleanup...')

  // 1. Delete products with fake keywords
  console.log('\n--- 1. Deleting Fake Products ---')
  for (const keyword of keywordsToDelete) {
    const result = await prisma.product.deleteMany({
      where: {
        title: {
          contains: keyword,
          mode: 'insensitive'
        }
      }
    })
    if (result.count > 0) {
      console.log(`🗑️ Deleted ${result.count} products containing "${keyword}"`)
    }
  }

  // 2. Delete duplicate products (keep only 1 per SKU)
  console.log('\n--- 2. Deleting Duplicates ---')
  const allProducts = await prisma.product.findMany({
    select: { id: true, sku: true }
  })
  
  const skuGroups: { [key: string]: string[] } = {}
  allProducts.forEach(p => {
    if (p.sku) {
      if (!skuGroups[p.sku]) skuGroups[p.sku] = []
      skuGroups[p.sku].push(p.id)
    }
  })

  for (const sku in skuGroups) {
    const ids = skuGroups[sku]
    if (ids.length > 1) {
      // Keep first ID, delete others
      const idsToDelete = ids.slice(1)
      await prisma.product.deleteMany({
        where: { id: { in: idsToDelete } }
      })
      console.log(`🗑️ Deleted ${idsToDelete.length} duplicates for SKU: ${sku}`)
    }
  }

  // 3. Update all real products with proper names
  console.log('\n--- 3. Updating Titles ---')
  for (const update of productTitleUpdates) {
    const result = await prisma.product.updateMany({
      where: { sku: update.sku },
      data: { title: update.title }
    })
    if (result.count > 0) {
      console.log(`✅ Updated Title for SKU ${update.sku}: "${update.title}"`)
    } else {
      // console.warn(`⚠️ SKU not found: ${update.sku}`)
    }
  }

  console.log('\n🎉 Cleanup and Update Complete!')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
