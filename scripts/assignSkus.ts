import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const titleToSkuMap = {
  "General Surgical Drape Pack": "001039SMS",
  "Mini Drape Pack": "001042PDA",
  "LSCS Drape pack": "002002SRH",
  "Ortho Drape pack (with 5 gown & 3 gown)": "003009NAH",
  "CABG Drape Packs": "5007PMS",
  "Delivery Drape pack": "002004SSS",
  "Laparoscopy Drape Packs": "002014PNG",
  "DNC Drape kit": "002006JYM",
  "IVF Drape Packs": "002009GEN",
  "Perineal Drape kit": "002005MDI",
  "Urology Drape Packs": "004001GEN",
  "Embryo Transplant Packs": "002007GEN",
  "OCR -ET Packs": "002013ARC",
  "Hb SAG Drape Pack": "0010037SKS",
  "Anglo Drape Packs": "005005VJO",
  "Neurology Drape Packs": "006006AHC",
  "HIV Protection Drape kit": "001037KAU",
  "Hystro lap pouch": "002012SAI",
  "TKR - Total Knee Replacement Drape Pack": "003003PMR",
  "THR - Total Hip Replacement Drape Pack": "003005PRM",
  "Hip U Drape": "003004PRM",
  "Knee O Drape": "003001PRM",
  "Knee Arthroscopy": "003011CTN",
  "Shoulder Arthroscopy": "003012CTN",
  "Surgeon Gowns - SMS Standard": "001003STD",
  "Surgeon Gowns - SMS - Wrap around + Reinforced": "001003RFD",
  "Disposable Patient Gown (Standard)": "001002GEN",
  "Disposable Bed Sheets With Pillow Cover - SMS": "001008SMS",
  "Maternity Mat": "002004NFU"
}

async function main() {
  console.log("🚀 Starting SKU assignment...")
  let updated = 0
  for (const [title, sku] of Object.entries(titleToSkuMap)) {
    const result = await prisma.product.updateMany({
      where: { title: title },
      data: { sku: sku }
    })
    if (result.count > 0) {
      console.log(`✅ Assigned SKU ${sku} to product: "${title}"`)
      updated += result.count
    } else {
      console.log(`⚠️  Product not found: "${title}"`)
    }
  }
  console.log(`\n🎉 Finished. Total records updated: ${updated}`)
  await prisma.$disconnect()
}

main().catch(e => {
  console.error(e)
  process.exit(1)
})
