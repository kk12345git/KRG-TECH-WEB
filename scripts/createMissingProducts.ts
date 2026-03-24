import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const missingProducts = [
  { sku: "001039SAV", title: "Universal Drape Pack (Variant SAV)", cat: "ot-sheets", desc: "Universal sterile pack - 3 Gown variant", img: "/images/products/universal-drape-pack.png" },
  { sku: "003009FOR", title: "Ortho Drape Pack (Variant FOR)", cat: "ot-sheets", desc: "Specialized Orthopedic pack - FOR variant", img: "/images/products/ortho-drape-pack.png" },
  { sku: "003009DVK", title: "Ortho Drape Pack (Variant DVK)", cat: "ot-sheets", desc: "Specialized Orthopedic pack - DVK variant", img: "/images/products/ortho-drape-pack.png" },
  { sku: "003009SAI", title: "Ortho Drape Pack (Variant SAI)", cat: "ot-sheets", desc: "Specialized Orthopedic pack - SAI variant", img: "/images/products/ortho-drape-pack.png" },
  { sku: "5007VMC", title: "CABG Drape Pack (Variant VMC)", cat: "customized-packs", desc: "Complex cardio-vascular pack - VMC variant", img: "/images/products/cabg-drape-packs.png" }, // Adjusted image path guess
  { sku: "002014SKS", title: "Specialized Drape Pack SKS", cat: "ot-sheets", desc: "Sterile procedure pack SKS", img: "/images/products/universal-drape-pack.png" },
  { sku: "002010GEN", title: "General Surgery Pack GEN", cat: "ot-sheets", desc: "General surgical intervention pack", img: "/images/products/gen-surgical-drape-pack.png" },
  { sku: "001003XXL", title: "Surgeon Gown (XXL)", cat: "surgeon-gowns", desc: "Extra large sterile surgeon gown", img: "/images/products/gown-sms-standard.png" },
  { sku: "001003SFD", title: "Surgeon Gown (Standard/Reinforced)", cat: "surgeon-gowns", desc: "Standard body with reinforced zones", img: "/images/products/gown-sms-standard.png" },
  { sku: "001003WFD", title: "Surgeon Gown (Wraparound Body Reinforced)", cat: "surgeon-gowns", desc: "Full wraparound protection with body reinforcement", img: "/images/products/gown-sms-standard.png" },
  { sku: "001003BFD", title: "Surgeon Gown (Standard/Body Reinforced)", cat: "surgeon-gowns", desc: "Standard cut with extra body barrier", img: "/images/products/gown-sms-standard.png" },
  { sku: "001002FSL", title: "Patient Gown (Full Sleeve)", cat: "patient-wears", desc: "Full coverage patient gown", img: "/images/products/disposable-patient-gown.png" },
  { sku: "001002SLS", title: "Patient Gown (Sleeveless)", cat: "patient-wears", desc: "Sleeveless patient gown for easy access", img: "/images/products/disposable-patient-gown.png" },
  { sku: "001003PSB", title: "Isolation Gown (PPSB)", cat: "patient-wears", desc: "Protective isolation gown", img: "/images/products/disposable-patient-gown.png" },
  { sku: "001008BLU", title: "Disposable Bed Sheet (Blue)", cat: "bed-sheets", desc: "Blue medical grade bed sheet", img: "/images/products/bed-sheets.png" }, // Guessing base img
  { sku: "001008YEL", title: "Disposable Bed Sheet (Yellow)", cat: "bed-sheets", desc: "Yellow medical grade bed sheet", img: "/images/products/bed-sheets.png" },
  { sku: "001008PSB", title: "Disposable Bed Sheet (PPSB)", cat: "bed-sheets", desc: "PPSB medical grade bed sheet", img: "/images/products/bed-sheets.png" },
  { sku: "001012SMF", title: "Covering Sheet (SMS)", cat: "bed-sheets", desc: "SMS covering sheet", img: "/images/products/bed-sheets.png" },
  { sku: "001007SMS", title: "Examination Couch Sheet", cat: "bed-sheets", desc: "Standard examination couch drape", img: "/images/products/bed-sheets.png" }
]

async function main() {
  console.log('--- CREATING MISSING PRODUCTS ---')
  for (const p of missingProducts) {
    const category = await prisma.category.findUnique({ where: { slug: p.cat } })
    if (!category) {
      console.error(`❌ Category not found: ${p.cat}`)
      continue
    }

    await prisma.product.create({
      data: {
        sku: p.sku,
        title: p.title,
        description: p.desc,
        image: p.img,
        categoryId: category.id,
        isFeatured: false
      }
    })
    console.log(`✅ Created product for SKU: ${p.sku}`)
  }
}

main().finally(() => prisma.$disconnect())
