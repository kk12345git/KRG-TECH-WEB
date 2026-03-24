import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const products = [

  // ============================================================
  // CATEGORY 1: DISPOSABLE SURGICAL DRAPE PACKS & KITS
  // ============================================================

  // --- GENERAL DRAPE PACK (3 variants) ---
  {
    sku: '001039SMS',
    variantGroup: 'general-drape-pack',
    variantLabel: 'Standard — 5 Gowns',
    kitContents: JSON.stringify([
      { no:1, item:'Surgeon Gown Standard x5', spec:'SMMS 43 GSM — 160 x 135 CMS' },
      { no:2, item:'Hand Towel x5', spec:'Spun Lace 45 GSM — 32 x 32 CMS' },
      { no:3, item:'Large Sheet with Release x2', spec:'SMMS 50 GSM — 200 x 160 CMS' },
      { no:4, item:'Small Sheet with Absorbent x4', spec:'SMMS/Spun Lace 68 GSM — 100 x 80 CMS' },
      { no:5, item:'Mayo Stand Cover x1', spec:'PP+PE Laminated 40 GSM — 150 x 160 CMS' },
      { no:6, item:'Trolley Sheet x1', spec:'PP+PE Laminated 40 GSM — 120 x 160 CMS' },
      { no:7, item:'Cautry Bag x1', spec:'SMMS 43 GSM — 30 x 30 CMS' },
      { no:8, item:'Wrapper x1', spec:'SMMS 35 GSM — 80 x 100 CMS' }
    ])
  },
  {
    sku: '001039SAV',
    variantGroup: 'general-drape-pack',
    variantLabel: 'Economy — 3 Gowns',
    kitContents: JSON.stringify([
      { no:1, item:'Surgeon Gown Standard x3', spec:'SMMS 43 GSM — 160 x 135 CMS' },
      { no:2, item:'Hand Towel x3', spec:'Spun Lace 45 GSM — 32 x 32 CMS' },
      { no:3, item:'Large Sheet x2', spec:'SMMS 50 GSM — 200 x 160 CMS' },
      { no:4, item:'Small Sheet with Absorbent x4', spec:'SMMS/Spun Lace 68 GSM — 100 x 80 CMS' },
      { no:5, item:'Mayo Stand Cover x1', spec:'PP+PE Laminated 40 GSM — 150 x 160 CMS' },
      { no:6, item:'Trolley Sheet x1', spec:'PP+PE Laminated 40 GSM — 120 x 160 CMS' },
      { no:7, item:'Cautry Bag x1', spec:'SMMS 43 GSM — 30 x 30 CMS' },
      { no:8, item:'Wrapper x1', spec:'SMMS 35 GSM — 80 x 100 CMS' }
    ])
  },
  {
    sku: '001039CTN',
    variantGroup: 'general-drape-pack',
    variantLabel: 'Premium — 4 Gowns',
    kitContents: JSON.stringify([
      { no:1, item:'Surgeon Gown Standard x4', spec:'SMMS 43 GSM — 160 x 135 CMS' },
      { no:2, item:'Hand Towel x4', spec:'Spun Lace 45 GSM — 32 x 32 CMS' },
      { no:3, item:'Large Sheet Release x2', spec:'SMMS 43 GSM — 200 x 160 CMS' },
      { no:4, item:'Small Sheet with Absorbent x4', spec:'SMMS/Spun Lace 68 GSM — 100 x 80 CMS' },
      { no:5, item:'Mayo Stand Cover x1', spec:'PP+PE Laminated 40 GSM — 150 x 160 CMS' },
      { no:6, item:'Trolley Sheet x1', spec:'PP+PE Laminated 40 GSM — 120 x 160 CMS' },
      { no:7, item:'Cautry Bag x1', spec:'SMMS 43 GSM — 30 x 40 CMS' },
      { no:8, item:'Wrapper x1', spec:'SMMS 35 GSM — 80 x 100 CMS' }
    ])
  },
  // --- MINI DRAPE PACK (1 variant) ---
  {
    sku: '001042PDA',
    variantGroup: 'mini-drape-pack',
    variantLabel: 'Standard',
    kitContents: JSON.stringify([
      { no:1, item:'Surgeon Gown Standard x3', spec:'SMMS 43 GSM — 160 x 135 CMS' },
      { no:2, item:'Hand Towel x3', spec:'Spun Lace 45 GSM — 32 x 32 CMS' },
      { no:3, item:'Center Hole Sheet x1', spec:'SMMS 43 GSM — 120 x 160 CMS' },
      { no:4, item:'Large Sheet Release x1', spec:'SMMS 43 GSM — 200 x 160 CMS' },
      { no:5, item:'Small Sheet with Absorbent x3', spec:'SMMS/Spun Lace 68 GSM — 100 x 80 CMS' },
      { no:6, item:'Leggings Pair x1', spec:'SMMS 43 GSM — 120 x 140 CMS' },
      { no:7, item:'Wrapper x1', spec:'SMMS 35 GSM — 80 x 100 CMS' }
    ])
  },

  // --- LSCS CAESAREAN DRAPE PACK (3 variants) ---
  {
    sku: '002002SAI',
    variantGroup: 'lscs-caesarean-drape-pack',
    variantLabel: 'SAI — 3 Gowns, 1 Large Sheet',
    kitContents: JSON.stringify([
      { no:1, item:'Surgeon Gown Standard x3', spec:'SMMS 43 GSM — 160 x 135 CMS' },
      { no:2, item:'Hand Towel x3', spec:'Spun Lace 45 GSM — 32 x 32 CMS' },
      { no:3, item:'Large Sheet with Release x1', spec:'SMMS 43 GSM — 200 x 160 CMS' },
      { no:4, item:'Center Hole Sheet x1', spec:'SMMS 43 GSM — 160 x 200 CMS, Fenestration 20 x 25 CMS' },
      { no:5, item:'Small Sheet with Absorbent x4', spec:'SMMS/Spun Lace 68 GSM — 100 x 80 CMS' },
      { no:6, item:'Baby Sheet x1', spec:'Spun Lace 68 GSM — 60 x 72.5 CMS' },
      { no:7, item:'Trolley Sheet x1', spec:'PP+PE Laminated Sheet' },
      { no:8, item:'Wrapper x1', spec:'SMMS 35 GSM — 100 x 80 CMS' }
    ])
  },
  {
    sku: '002002PNG',
    variantGroup: 'lscs-caesarean-drape-pack',
    variantLabel: 'PNG — Premium (2 Large Sheets)',
    kitContents: JSON.stringify([
      { no:1, item:'Surgeon Gown Standard x3', spec:'SMMS 43 GSM — 160 x 135 CMS' },
      { no:2, item:'Hand Towel x3', spec:'Spun Lace 45 GSM — 32 x 32 CMS' },
      { no:3, item:'Large Sheet with Release x2', spec:'SMMS 43 GSM — 200 x 160 CMS' },
      { no:4, item:'Center Hole Sheet x1', spec:'SMMS 43 GSM — 160 x 200 CMS, Fenestration 20 x 25 CMS' },
      { no:5, item:'Small Sheet with Absorbent x4', spec:'SMMS/Spun Lace 68 GSM — 100 x 80 CMS' },
      { no:6, item:'Small Sheet Plain x1', spec:'SMMS 43 GSM — 100 x 80 CMS' },
      { no:7, item:'Trolley Sheet x1', spec:'PP+PE Laminated Sheet' }
    ])
  },
  {
    sku: '002002SRH',
    variantGroup: 'lscs-caesarean-drape-pack',
    variantLabel: 'SRH — Standard (2 Large Sheets)',
    kitContents: JSON.stringify([
      { no:1, item:'Surgeon Gown Standard x3', spec:'SMMS 43 GSM — 160 x 135 CMS' },
      { no:2, item:'Hand Towel x3', spec:'Spun Lace 45 GSM — 32 x 32 CMS' },
      { no:3, item:'Large Sheet with Release x2', spec:'SMMS 43 GSM — 200 x 160 CMS' },
      { no:4, item:'Center Hole Sheet x1', spec:'SMMS 43 GSM — 160 x 200 CMS, Fenestration 20 x 25 CMS' },
      { no:5, item:'Small Sheet with Absorbent x4', spec:'SMMS/Spun Lace 68 GSM — 100 x 80 CMS' },
      { no:6, item:'Small Sheet Plain x1', spec:'SMMS 43 GSM — 100 x 80 CMS' },
      { no:7, item:'Trolley Sheet x1', spec:'PP+PE Laminated Sheet' },
      { no:8, item:'Wrapper x1', spec:'SMMS 35 GSM — 80 x 100 CMS' }
    ])
  },

  // --- ORTHO DRAPE PACK (5 variants) ---
  {
    sku: '003009NAH',
    variantGroup: 'ortho-drape-pack',
    variantLabel: 'NAH — 3 Gowns, Medium Sheets',
    kitContents: JSON.stringify([
      { no:1, item:'Reinforced Surgeon Gown x3', spec:'SMMS 43 GSM — 200 x 160 CMS, PE+PP Lamination' },
      { no:2, item:'Hand Towel x3', spec:'Spun Lace 45 GSM — 32 x 32 CMS' },
      { no:3, item:'Wrapper x1', spec:'SMS 35 GSM — 80 x 100 CMS' },
      { no:4, item:'Ortho Drape x1', spec:'PP+PP Lamination 40 GSM — 200 x 160 CMS with Release Tape' },
      { no:5, item:'Large Sheet x1', spec:'SMMS 43 GSM — 200 x 160 CMS' },
      { no:6, item:'60 inch Sheet x1', spec:'SMMS 43 GSM — 100 x 160 CMS' },
      { no:7, item:'Medium Sheet with Absorbent x4', spec:'SMMS 43 / Spun Lace 68 GSM — 100 x 80 CMS' },
      { no:8, item:'Medium Sheet Plain x2', spec:'SMMS 43 GSM — 100 x 80 CMS' },
      { no:9, item:'Trolley Sheet x1', spec:'PP+PE Laminated 40 GSM — 200 x 160 CMS' },
      { no:10, item:'Cautry Bag x1', spec:'SMMS 43 GSM — 30 x 30 CMS' },
      { no:11, item:'Wrapper x2', spec:'SMMS 35 GSM — 80 x 100 CMS' }
    ])
  },
  {
    sku: '003009FOR',
    variantGroup: 'ortho-drape-pack',
    variantLabel: 'FOR — 5 Gowns, 6 Large Sheets',
    kitContents: JSON.stringify([
      { no:1, item:'Reinforced Surgeon Gown x5', spec:'SMMS 43 GSM — 200 x 160 CMS, PE+PP Lamination' },
      { no:2, item:'Hand Towel x5', spec:'Spun Lace 45 GSM — 32 x 32 CMS' },
      { no:3, item:'Wrapper x1', spec:'SMS 35 GSM — 80 x 100 CMS' },
      { no:4, item:'Ortho Drape x1', spec:'PP+PP Lamination 40 GSM — 200 x 160 CMS' },
      { no:5, item:'Large Sheet Release x6', spec:'SMMS 50 GSM — 200 x 160 CMS with Release' },
      { no:6, item:'Large Sheet Plain x1', spec:'SMMS 50 GSM — 200 x 160 CMS' },
      { no:7, item:'60 inch Sheet x1', spec:'SMMS 43 GSM — 100 x 160 CMS' },
      { no:8, item:'Small Sheet with Absorbent x4', spec:'SMMS 43 / Spun Lace 68 GSM — 100 x 80 CMS' },
      { no:9, item:'Small Sheet Plain x2', spec:'SMMS 43 GSM — 100 x 80 CMS' },
      { no:10, item:'Trolley Sheet x1', spec:'PP+PE Laminated 40 GSM — 200 x 160 CMS' },
      { no:11, item:'Cautry Bag x1', spec:'SMMS 43 GSM — 30 x 40 CMS' },
      { no:12, item:'Wrapper x1', spec:'SMS 100 x 80 CMS' }
    ])
  },
  {
    sku: '003009SUG',
    variantGroup: 'ortho-drape-pack',
    variantLabel: 'SUG — 4 Gowns, Small Sheets',
    kitContents: JSON.stringify([
      { no:1, item:'Reinforced Surgeon Gown x4', spec:'SMMS 43 GSM — 200 x 160 CMS, PE+PP Lamination' },
      { no:2, item:'Hand Towel x4', spec:'Spun Lace 45 GSM — 32 x 32 CMS' },
      { no:3, item:'Ortho Drape x1', spec:'PP+PP Lamination 40 GSM — 200 x 160 CMS' },
      { no:4, item:'Large Sheet x4', spec:'SMMS 50 GSM — 200 x 160 CMS' },
      { no:5, item:'60 inch Sheet x2', spec:'SMMS 43 GSM — 100 x 160 CMS' },
      { no:6, item:'Small Sheet with Absorbent x4', spec:'SMMS 43 / Spun Lace 68 GSM — 100 x 80 CMS' },
      { no:7, item:'Small Sheet Plain x2', spec:'SMMS 43 GSM — 100 x 80 CMS' },
      { no:8, item:'Trolley Sheet x1', spec:'PP+PE Laminated 40 GSM — 200 x 160 CMS' },
      { no:9, item:'Cautry Bag x1', spec:'SMMS 43 GSM — 30 x 30 CMS' },
      { no:10, item:'Wrapper x2', spec:'SMMS 35 GSM — 80 x 100 CMS' }
    ])
  },
  {
    sku: '003009DVK',
    variantGroup: 'ortho-drape-pack',
    variantLabel: 'DVK — 5 Gowns, 3 Large Sheets',
    kitContents: JSON.stringify([
      { no:1, item:'Reinforced Surgeon Gown x5', spec:'SMMS 43 GSM — 200 x 160 CMS, PE+PP Lamination' },
      { no:2, item:'Hand Towel x5', spec:'Spun Lace 45 GSM — 32 x 32 CMS' },
      { no:3, item:'Wrapper x1', spec:'SMS 35 GSM — 80 x 100 CMS' },
      { no:4, item:'Ortho Drape x1', spec:'PP+PP Lamination 40 GSM — 200 x 160 CMS' },
      { no:5, item:'Large Sheet x3', spec:'SMMS 50 GSM — 200 x 160 CMS' },
      { no:6, item:'60 inch Sheet x2', spec:'SMMS 43 GSM — 100 x 160 CMS' },
      { no:7, item:'Small Sheet with Absorbent x4', spec:'SMMS 43 / Spun Lace 68 GSM — 100 x 80 CMS' },
      { no:8, item:'Small Sheet Plain x4', spec:'SMMS 43 GSM — 100 x 80 CMS' },
      { no:9, item:'Trolley Sheet x1', spec:'PP+PE Laminated 40 GSM — 200 x 160 CMS' },
      { no:10, item:'Cautry Bag x1', spec:'SMMS 43 GSM — 30 x 40 CMS' },
      { no:11, item:'Wrapper x1', spec:'SMS 100 x 80 CMS' }
    ])
  },
  {
    sku: '003009SAI',
    variantGroup: 'ortho-drape-pack',
    variantLabel: 'SAI — 4 Gowns, 4 Large Sheets',
    kitContents: JSON.stringify([
      { no:1, item:'Reinforced Surgeon Gown x4', spec:'SMMS 43 GSM — 200 x 160 CMS, PE+PP Lamination' },
      { no:2, item:'Hand Towel x4', spec:'Spun Lace 45 GSM — 32 x 32 CMS' },
      { no:3, item:'Ortho Drape x1', spec:'PP+PP Lamination 40 GSM — 200 x 160 CMS' },
      { no:4, item:'Large Sheet x4', spec:'SMMS 50 GSM — 200 x 160 CMS' },
      { no:5, item:'60 inch Sheet x2', spec:'SMMS 43 GSM — 100 x 160 CMS' },
      { no:6, item:'Small Sheet Plain x6', spec:'SMMS 43 GSM — 100 x 80 CMS' },
      { no:7, item:'Trolley Sheet x1', spec:'PP+PE Laminated 40 GSM — 200 x 160 CMS' },
      { no:8, item:'Cautry Bag x1', spec:'SMMS 43 GSM — 30 x 30 CMS' },
      { no:9, item:'Wrapper x1', spec:'SMS 100 x 80 CMS' }
    ])
  },

  // --- CABG DRAPE PACK (2 variants) ---
  {
    sku: '5007PMS',
    variantGroup: 'cabg-drape-pack',
    variantLabel: 'PMS — Full Pack (3 Packs)',
    kitContents: JSON.stringify([
      { no:1, item:'Reinforced Surgeon Gown x5', spec:'SMMS 43 GSM — 197 x 160 CMS, PE+PP Lamination' },
      { no:2, item:'Hand Towel x10', spec:'Spun Lace 45 GSM — 32 x 32 CMS' },
      { no:3, item:'Cautry Bag x2', spec:'SMMS 43 GSM — 30 x 30 CMS' },
      { no:4, item:'Mayo Stand Cover x1', spec:'PP+PE Laminated 40 GSM — 150 x 160 CMS' },
      { no:5, item:'Mayo Stand Cover Sheet Form x1', spec:'PP+PE Laminated 40 GSM — 100 x 160 CMS' },
      { no:6, item:'Basin Sheet x2', spec:'SMMS 43 GSM — 130 x 160 CMS' },
      { no:7, item:'Large Sheet RFD x1', spec:'PP+PE Laminated 60 GSM — 160 x 160 CMS' },
      { no:8, item:'Trolley Sheet x1', spec:'PP+PE Laminated 40 GSM — 220 x 160 CMS' },
      { no:9, item:'Rolling Sheet x1', spec:'SMMS 43 GSM — 45 x 75 CMS' },
      { no:10, item:'Screen Sheet + Release + Absorbant x1', spec:'SMMS 43 GSM — 220 x 160 CMS, Spun Lace 70 GSM patch' },
      { no:11, item:'Side Sheet Absorbant x2', spec:'100% Spun Lace Laminated 73 GSM — 100 x 80 CMS' },
      { no:12, item:'Triangle Sheet x2', spec:'SMMS 43 GSM — 80 x 80 CMS' },
      { no:13, item:'Abdominal Sheet x1', spec:'SMMS 43 GSM — 160 x 160 CMS' },
      { no:14, item:'Papper Sheet x1', spec:'Spun Lace Lamination 73 GSM — 100 x 72.5 CMS' },
      { no:15, item:'Groin Sheet x1', spec:'SMMS 43 GSM' },
      { no:16, item:'Long Sheet x1', spec:'SMMS 43 GSM' },
      { no:17, item:'Side Sheet Plain x1', spec:'SMMS 43 GSM' },
      { no:18, item:'Wrapper x1', spec:'SMMS 35 GSM' }
    ])
  },
  {
    sku: '5007VMC',
    variantGroup: 'cabg-drape-pack',
    variantLabel: 'VMC — Microporous Lamination',
    kitContents: JSON.stringify([
      { no:1, item:'Reinforced Surgeon Gown x5', spec:'SMMS 43 GSM — 197 x 160 CMS, 60 GSM Microporous Lamination' },
      { no:2, item:'Hand Towel x5', spec:'Spun Lace 45 GSM — 32 x 32 CMS' },
      { no:3, item:'Long Sheet x5', spec:'SMMS 50 GSM — 250 x 160 CMS + 2 inch Release Tape' },
      { no:4, item:'Medium Sheet with Absorbant Patch x4', spec:'SMMS 50 GSM — 100 x 100 CMS + Spun Lace 68 GSM' },
      { no:5, item:'Medium Sheet Plain x4', spec:'SMMS 50 GSM — 100 x 100 CMS' },
      { no:6, item:'Groin Sheet with Release Tape x2', spec:'SMMS 50 GSM — 51 x 34 CMS' },
      { no:7, item:'Trolley Sheet Large x1', spec:'PP+PE Laminated 60 GSM — 240 x 240 CMS' },
      { no:8, item:'Trolley Sheet x2', spec:'PP+PE Laminated 60 GSM — 200 x 160 CMS' },
      { no:9, item:'Trolley Sheet Medium x1', spec:'PP+PE Laminated 60 GSM — 150 x 160 CMS' },
      { no:10, item:'Cautry Bag x5', spec:'45 x 30 CMS with 2 Release Tapes' },
      { no:11, item:'Wrapper x1', spec:'SMMS 35 GSM — 100 x 80 CMS' }
    ])
  },

  // --- DELIVERY DRAPE PACK (2 variants) ---
  {
    sku: '002004NFU',
    variantGroup: 'delivery-drape-pack',
    variantLabel: 'NFU — With Fluid Collection Pouch',
    kitContents: JSON.stringify([
      { no:1, item:'Maternity Mat with Fluid Collection Pouch x1', spec:'Underpad with fluid collection pack' },
      { no:2, item:'Large Sheet x1', spec:'SMMS 43 GSM' },
      { no:3, item:'Medium Sheet x1', spec:'SMMS 43 GSM' },
      { no:4, item:'Hip Legging x1', spec:'SMMS 43 GSM' },
      { no:5, item:'Apron x1', spec:'Disposable waterproof' },
      { no:6, item:'Baby Towel x1', spec:'Soft absorbent' },
      { no:7, item:'Cautry Bag x1', spec:'SMMS 43 GSM' },
      { no:8, item:'Buffant Cap x1', spec:'Disposable' },
      { no:9, item:'Cord Clamp x1', spec:'Sterile disposable' },
      { no:10, item:'Wrapper x1', spec:'SMMS 35 GSM' }
    ])
  },
  {
    sku: '002004SSS',
    variantGroup: 'delivery-drape-pack',
    variantLabel: 'SSS — Standard Delivery Pack',
    kitContents: JSON.stringify([
      { no:1, item:'Surgeon Gown Standard x1', spec:'SMMS 43 GSM — 160 x 135 CMS' },
      { no:2, item:'Hand Towel x1', spec:'Spun Lace 45 GSM — 32 x 32 CMS' },
      { no:3, item:'Center Hole Sheet x1', spec:'SMMS 43 GSM — 120 x 160 CMS' },
      { no:4, item:'Maternity Mat x1', spec:'Underpad with fluid collection pack' },
      { no:5, item:'Leggings Pair x1', spec:'SMMS 43 GSM — 120 x 140 CMS' },
      { no:6, item:'Small Sheet Plain x1', spec:'SMMS 43 GSM — 100 x 160 CMS' },
      { no:7, item:'Small Sheet Laminated x1', spec:'PP+PE Laminated 40 GSM — 100 x 75 CMS' },
      { no:8, item:'Cleaning Wipes x1', spec:'Spun Lace 40 GSM — 60 x 60 CMS' },
      { no:9, item:'Wrapper x1', spec:'SMMS 35 GSM' }
    ])
  },
  // --- LAPROSCOPY DRAPE PACK (2 variants) ---
  {
    sku: '002014PNG',
    variantGroup: 'laproscopy-drape-pack',
    variantLabel: 'PNG — With 60 inch Sheet',
    kitContents: JSON.stringify([
      { no:1, item:'Surgeon Gown Standard x4', spec:'SMMS 43 GSM — 160 x 135 CMS' },
      { no:2, item:'Hand Towel x4', spec:'Spun Lace 40 GSM — 40 x 40 CMS' },
      { no:3, item:'Medium Sheet with Absorbant x1', spec:'SMMS 43 GSM — 100 x 80 CMS, Spun Lace patch' },
      { no:4, item:'Large Sheet with Release x3', spec:'SMMS 43 GSM — 200 x 160 CMS + Release Tape' },
      { no:5, item:'Medium Sheet with Release Tape x2', spec:'SMMS 43 GSM — 100 x 80 CMS' },
      { no:6, item:'Leggings Pair x1', spec:'SMMS 43 GSM — 100 x 80 CMS' },
      { no:7, item:'Center Hole Sheet with Adhesive x1', spec:'SMMS 43 GSM — 120 x 160 CMS' },
      { no:8, item:'60 inch Sheet x1', spec:'SMMS 43 GSM — 100 x 160 CMS' },
      { no:9, item:'Trolley Sheet x1', spec:'PP+PE Laminated 40 GSM — 200 x 160 CMS' },
      { no:10, item:'Kit Wrapper x1', spec:'SMS 35 GSM — 100 x 80 CMS' }
    ])
  },
  {
    sku: '002014SKS',
    variantGroup: 'laproscopy-lavh-drape-pack',
    variantLabel: 'LAVH — SKS Variant',
    kitContents: JSON.stringify([
      { no:1, item:'Surgeon Gown Standard x3', spec:'SMMS 43 GSM — 160 x 135 CMS' },
      { no:2, item:'Hand Towel x3', spec:'Spun Lace 40 GSM — 40 x 40 CMS' },
      { no:3, item:'Center Hole Sheet x2', spec:'SMMS 43 GSM — 100 x 60 CMS' },
      { no:4, item:'Large Sheet x2', spec:'SMMS 43 GSM — 200 x 160 CMS' },
      { no:5, item:'Trolley Sheet x1', spec:'PP+PE Laminated 40 GSM — 100 x 80 CMS' },
      { no:6, item:'Small Sheet Plain x1', spec:'SMMS 43 GSM — 100 x 80 CMS' },
      { no:7, item:'Small Sheet Plain Release x1', spec:'SMMS 43 GSM — 100 x 160 CMS' },
      { no:8, item:'Leggings Pair x1', spec:'SMMS 43 GSM — 100 x 80 CMS' },
      { no:9, item:'Wrapper x1', spec:'SMMS 35 GSM — 100 x 160 CMS' },
      { no:10, item:'Plain Sheet Release x1', spec:'SMMS 43 GSM — 100 x 160 CMS' }
    ])
  },

  // --- D&C DRAPE PACK (2 variants) ---
  {
    sku: '002006JYM',
    variantGroup: 'dc-drape-pack',
    variantLabel: 'JYM — Standard',
    kitContents: JSON.stringify([
      { no:1, item:'Surgeon Gown Standard x2', spec:'SMMS 43 GSM — 160 x 135 CMS' },
      { no:2, item:'Hand Towel x2', spec:'Spun Lace 40 GSM — 32 x 32 CMS' },
      { no:3, item:'Center Hole Sheet x1', spec:'SMMS 43 GSM — 120 x 160 CMS' },
      { no:4, item:'Leggings Pair x1', spec:'SMMS 43 GSM — 120 x 140 CMS' },
      { no:5, item:'Small Sheet with Absorbent x3', spec:'SMMS 35 GSM — 100 x 80 CMS, Absorbent patch 60 x 72 CMS' },
      { no:6, item:'Wrapper x1', spec:'SMMS 35 GSM' }
    ])
  },
  {
    sku: '002006PNG',
    variantGroup: 'dc-drape-pack',
    variantLabel: 'PNG — With Extra Absorbent Sheets',
    kitContents: JSON.stringify([
      { no:1, item:'Surgeon Gown Standard x2', spec:'SMMS 43 GSM — 160 x 135 CMS' },
      { no:2, item:'Hand Towel x2', spec:'Spun Lace 40 GSM — 32 x 32 CMS' },
      { no:3, item:'Center Hole Sheet x1', spec:'SMMS 43 GSM — 120 x 160 CMS' },
      { no:4, item:'Leggings Pair x1', spec:'SMMS 43 GSM — 120 x 140 CMS' },
      { no:5, item:'Small Sheet with Absorbent x3', spec:'SMMS 35 GSM — 100 x 80 CMS, Absorbent patch 60 x 72 CMS' },
      { no:6, item:'Wrapper x1', spec:'SMMS 35 GSM' }
    ])
  },

  // --- IVF EGG COLLECTION (2 variants) ---
  {
    sku: '002009CFB',
    variantGroup: 'ivf-egg-collection-drape-pack',
    variantLabel: 'CFB — 2 Sheets with Release',
    kitContents: JSON.stringify([
      { no:1, item:'Surgeon Gown Standard x2', spec:'SMMS 43 GSM — 160 x 135 CMS' },
      { no:2, item:'Hand Towel x2', spec:'Spun Lace 45 GSM — 32 x 32 CMS' },
      { no:3, item:'Center Hole Sheet x1', spec:'SMMS 43 GSM — 120 x 160 CMS' },
      { no:4, item:'Trolley Sheet x1', spec:'PP+PE Laminated 40 GSM — 120 x 160 CMS' },
      { no:5, item:'Small Sheet with Release x2', spec:'SMMS 43 GSM — 100 x 80 CMS' },
      { no:6, item:'Leggings Pair x1', spec:'SMMS 43 GSM — 120 x 140 CMS' },
      { no:7, item:'Wrapper x1', spec:'SMMS 35 GSM — 100 x 80 CMS' }
    ])
  },
  {
    sku: '002009GEN',
    variantGroup: 'ivf-egg-collection-drape-pack',
    variantLabel: 'GEN — 4 Sheets with Release',
    kitContents: JSON.stringify([
      { no:1, item:'Surgeon Gown Standard x2', spec:'SMMS 43 GSM — 160 x 135 CMS' },
      { no:2, item:'Hand Towel x2', spec:'Spun Lace 45 GSM — 32 x 32 CMS' },
      { no:3, item:'Center Hole Sheet x1', spec:'SMMS 43 GSM — 120 x 160 CMS' },
      { no:4, item:'Trolley Sheet x1', spec:'PP+PE Laminated 40 GSM — 120 x 160 CMS' },
      { no:5, item:'Small Sheet with Release x4', spec:'SMMS 43 GSM — 100 x 80 CMS' },
      { no:6, item:'Cautry Bag x1', spec:'SMMS 43 GSM — 30 x 30 CMS' },
      { no:7, item:'Wrapper x1', spec:'SMMS 35 GSM — 100 x 80 CMS' }
    ])
  },

  // --- SINGLE VARIANT PACKS ---
  {
    sku: '002005MDI', variantGroup: 'perineal-procedure-pack', variantLabel: 'MDI Variant',
    kitContents: JSON.stringify([
      { no:1, item:'Surgeon Gown Standard x3', spec:'SMMS 43 GSM — 160 x 135 CMS' },
      { no:2, item:'Hand Towel x3', spec:'Spun Lace 40 GSM — 40 x 40 CMS' },
      { no:3, item:'Center Hole Sheet with ABS x1', spec:'SMMS 43 GSM — 160 x 200 CMS, Release Tape + Absorbant Patch' },
      { no:4, item:'Trolley Sheet x1', spec:'PP+PE Laminated 40 GSM — 120 x 160 CMS' },
      { no:5, item:'Small Sheet with Release x1', spec:'SMMS 43 GSM — 100 x 80 CMS' },
      { no:6, item:'Leggings Pair x1', spec:'SMMS 43 GSM — 120 x 140 CMS' },
      { no:7, item:'Large Sheet Release x1', spec:'SMMS 43 GSM — 200 x 160 CMS' },
      { no:8, item:'Wrapper x1', spec:'SMMS 35 GSM — 100 x 80 CMS' }
    ])
  },
  {
    sku: '004001GEN', variantGroup: 'urology-drape-pack', variantLabel: 'Standard',
    kitContents: JSON.stringify([
      { no:1, item:'Surgeon Gown Standard x2', spec:'SMMS 43 GSM — 135 x 160 CMS' },
      { no:2, item:'Hand Towel x2', spec:'Spun Lace 40 GSM — 32 x 32 CMS' },
      { no:3, item:'Center Hole Sheet Plain x1', spec:'SMMS 43 GSM — 200 x 160 CMS' },
      { no:4, item:'Large Sheet Release with ABS x2', spec:'SMMS 43 GSM — 200 x 160 CMS' },
      { no:5, item:'Small Sheet with ABS x2', spec:'SMMS 43 GSM — 100 x 80 CMS' },
      { no:6, item:'Leggings Pair x1', spec:'SMMS 43 GSM — 100 x 80 CMS' },
      { no:7, item:'Cautry Bag x2', spec:'SMMS 43 GSM — 30 x 30 CMS' },
      { no:8, item:'Wrapper x1', spec:'SMMS 35 GSM — 100 x 80 CMS' }
    ])
  },
  {
    sku: '002007GEN', variantGroup: 'embryo-transfer-pack', variantLabel: 'Standard',
    kitContents: JSON.stringify([
      { no:1, item:'Surgeon Gown Standard x1', spec:'SMMS 43 GSM — 160 x 135 CMS' },
      { no:2, item:'Hand Towel x1', spec:'Spun Lace 45 GSM — 32 x 32 CMS' },
      { no:3, item:'Center Hole Sheet x1', spec:'SMMS 43 GSM — 100 x 160 CMS' },
      { no:4, item:'Leggings Pair x1', spec:'SMMS 43 GSM — 120 x 140 CMS' },
      { no:5, item:'Wrapper x1', spec:'SMMS 43 GSM — 100 x 80 CMS' }
    ])
  },
  {
    sku: '002013ARC', variantGroup: 'ocr-et-drape-pack', variantLabel: 'ARC Standard',
    kitContents: JSON.stringify([
      { no:1, item:'Large Sheet x1', spec:'SMMS 43 GSM — 200 x 160 CMS' },
      { no:2, item:'Leggings Pair x1', spec:'SMMS 43 GSM — 120 x 140 CMS' },
      { no:3, item:'Center Hole Sheet x1', spec:'SMMS 43 GSM — 80 x 160 CMS' },
      { no:4, item:'Wrapper x1', spec:'SMMS 35 GSM — 100 x 80 CMS' }
    ])
  },
  {
    sku: '0010037SKS', variantGroup: 'hb-sag-drape-pack', variantLabel: 'SKS Variant',
    kitContents: JSON.stringify([
      { no:1, item:'Surgeon Gown Wrap Around Reinforced x4', spec:'SMMS 43 GSM — 160 x 135 CMS' },
      { no:2, item:'Hand Towel x4', spec:'Spun Lace 45 GSM — 32 x 32 CMS' },
      { no:3, item:'Large Sheet with Release x8', spec:'SMMS 50 GSM — 220 x 160 CMS' },
      { no:4, item:'Trolley Sheet x1', spec:'PP+PE Laminated 60 GSM' },
      { no:5, item:'Wrapper x2', spec:'SMMS 35 GSM — 100 x 80 CMS' }
    ])
  },
  {
    sku: '005005VJO', variantGroup: 'angio-drape-pack', variantLabel: 'VJO Standard',
    kitContents: JSON.stringify([
      { no:1, item:'Surgeon Gown Reinforced x2', spec:'SMMS 43 GSM — 160 x 200 CMS, PP+PE Lamination patch' },
      { no:2, item:'Hand Towel x2', spec:'Spun Lace 45 GSM — 32 x 32 CMS' },
      { no:3, item:'Angio Drape x1', spec:'PP+PE Laminated 60 GSM — 350 x 160 CMS' },
      { no:4, item:'Release Strips x2', spec:'SMS Adhesive Strips' },
      { no:5, item:'Wrapper cum Trolley Sheet x1', spec:'PP+PE Laminated 40 GSM — 160 x 200 CMS' }
    ])
  },
  {
    sku: '006006AHC', variantGroup: 'neurology-drape-pack', variantLabel: 'AHC Standard',
    kitContents: JSON.stringify([
      { no:1, item:'Surgeon Gown Standard x3', spec:'SMMS 43 GSM — 160 x 135 CMS' },
      { no:2, item:'Hand Towel x3', spec:'Spun Lace 45 GSM — 32 x 32 CMS' },
      { no:3, item:'Large Sheet x2', spec:'SMMS 50 GSM — 200 x 160 CMS' },
      { no:4, item:'Center Hole Sheet x1', spec:'SMMS 50 GSM' },
      { no:5, item:'Small Sheet with Absorbent x4', spec:'SMMS/Spun Lace 68 GSM — 100 x 80 CMS' },
      { no:6, item:'Small Sheet Plain x1', spec:'SMMS 43 GSM — 100 x 80 CMS' },
      { no:7, item:'Trolley Sheet x1', spec:'PP+PE Laminated Sheet' }
    ])
  },
  {
    sku: '001037KAU', variantGroup: 'hiv-drape-pack', variantLabel: 'KAU Full PPE Pack',
    kitContents: JSON.stringify([
      { no:1, item:'Reinforced Surgeon Gown x3', spec:'SMMS 43 GSM — 197 x 160 CMS, PE+PP Lamination' },
      { no:2, item:'Hand Towel x3', spec:'Spun Lace 40 GSM — 32 x 32 CMS' },
      { no:3, item:'Wrapper x1', spec:'SMMS 35 GSM — 80 x 100 CMS' },
      { no:4, item:'Large Sheet Release x3', spec:'SMMS 43 GSM — 200 x 160 CMS' },
      { no:5, item:'Small Sheet with Absorbent x4', spec:'SMMS/Spun Lace 68 GSM — 100 x 80 CMS' },
      { no:6, item:'Trolley Sheet x1', spec:'PP+PE Laminated 40 GSM — 200 x 80 CMS' },
      { no:7, item:'Boot Cover Pair x3', spec:'Sewn from PP+PE Laminated Sheet' },
      { no:8, item:'Goggles x3', spec:'Protective surgical goggles' },
      { no:9, item:'Surgical Gloves Pair x3', spec:'Sterile' },
      { no:10, item:'Face Mask x3', spec:'3-ply surgical' },
      { no:11, item:'Tudaug Cap x3', spec:'Disposable turban cap' }
    ])
  },
  {
    sku: '002012SAI', variantGroup: 'hystrolap-pouch', variantLabel: 'SAI — With Fluid Pouch',
    kitContents: JSON.stringify([
      { no:1, item:'Surgeon Gown Standard x4', spec:'SMMS 43 GSM — 160 x 135 CMS' },
      { no:2, item:'Hand Towel x4', spec:'Spun Lace 45 GSM — 32 x 32 CMS' },
      { no:3, item:'Center Hole Sheet with Fluid Pouch x1', spec:'SMMS 200 x 160 CMS + Spun Lace 68 GSM Absorbant + Fluid Collection Pouch' },
      { no:4, item:'Large Sheet with Release x1', spec:'SMMS 43 GSM — 200 x 160 CMS' },
      { no:5, item:'Small Sheet with Absorbant x3', spec:'SMMS 43 GSM — 100 x 80 CMS + Absorbant Patch' },
      { no:6, item:'Hip Legging Pair x1', spec:'SMMS 43 GSM — 120 x 140 CMS' },
      { no:7, item:'Cautry Bag x1', spec:'SMMS 43 GSM — 30 x 30 CMS' },
      { no:8, item:'Trolley Sheet x1', spec:'PP+PE Laminated — 120 x 160 CMS' },
      { no:9, item:'Wrapper x1', spec:'SMS 35 GSM — 100 x 80 CMS' }
    ])
  },
  {
    sku: '003003PMR', variantGroup: 'tkr-drape', variantLabel: 'PMR — Total Knee Replacement',
    kitContents: JSON.stringify([
      { no:1, item:'Surgeon Gown Reinforced x4', spec:'SMMS 43 GSM — 160 x 135 CMS' },
      { no:2, item:'Hand Towel x4', spec:'Spun Lace 45 GSM — 32 x 32 CMS' },
      { no:3, item:'Wrapper x1', spec:'SMMS 35 GSM — 100 x 80 CMS' },
      { no:4, item:'Knee O Drape x1', spec:'SMMS 50 GSM — 320 x 240 CMS, 2-side Release Tape, Spun Lace Absorbant on rubber aperture' },
      { no:5, item:'Large Sheet Release x2', spec:'SMMS 43 GSM — 200 x 160 CMS' },
      { no:6, item:'Small Sheet with Absorbent x2', spec:'SMMS/Spun Lace 68 GSM — 100 x 80 CMS' },
      { no:7, item:'Trolley Sheet x4', spec:'PP+PE Laminated 40 GSM — 200 x 160 CMS' }
    ])
  },
  {
    sku: '003005PRM', variantGroup: 'thr-drape', variantLabel: 'PRM — Total Hip Replacement',
    kitContents: JSON.stringify([
      { no:1, item:'Surgeon Gown Reinforced x4', spec:'SMMS 43 GSM — 160 x 135 CMS' },
      { no:2, item:'Hand Towel x4', spec:'Spun Lace 45 GSM — 32 x 32 CMS' },
      { no:3, item:'U Drape x1', spec:'SMMS 50 GSM — 340 x 240 CMS, PP+PE 60 GSM reinforced' },
      { no:4, item:'Large Sheet Release x2', spec:'SMMS 43 GSM — 200 x 160 CMS' },
      { no:5, item:'Small Sheet with Absorbent x4', spec:'SMMS/Spun Lace 68 GSM — 100 x 80 CMS' },
      { no:6, item:'Trolley Sheet x4', spec:'PP+PE Laminated 40 GSM — 200 x 160 CMS' },
      { no:7, item:'Wrapper x1', spec:'SMMS 35 GSM — 100 x 80 CMS' }
    ])
  },
  {
    sku: '003004PRM', variantGroup: 'hip-u-drape', variantLabel: 'PRM — Hip U Drape',
    kitContents: JSON.stringify([
      { no:1, item:'U Drape x1', spec:'SMMS 50 GSM — 340 x 240 CMS, PP+PE 60 GSM bottom reinforced' },
      { no:2, item:'Large Sheet x1', spec:'SMMS 43 GSM — 200 x 160 CMS' },
      { no:3, item:'Small Sheet with Absorbent x1', spec:'SMMS/Spun Lace 68 GSM — 100 x 80 CMS' },
      { no:4, item:'Cautry Bag x1', spec:'SMMS 43 GSM — 30 x 30 CMS' },
      { no:5, item:'Wrapper x1', spec:'SMMS 35 GSM — 100 x 80 CMS' }
    ])
  },
  {
    sku: '003001PRM', variantGroup: 'knee-o-drape-pack', variantLabel: 'PRM — Knee O Premium',
    kitContents: JSON.stringify([
      { no:1, item:'Knee O Drape PRM x1', spec:'SPL Laminated, PE + Absorbant Spun Lace (Ginni Filament), 50 GSM SMS + rubber aperture' },
      { no:2, item:'Extremity Cover x1', spec:'Cling Wrap for limb coverage' },
      { no:3, item:'Cautry Bag x1', spec:'SMMS 43 GSM' },
      { no:4, item:'Wrapper x1', spec:'SMMS 35 GSM' }
    ])
  },
  {
    sku: '003011CTN', variantGroup: 'knee-arthroscopy-drape', variantLabel: 'CTN Standard',
    kitContents: JSON.stringify([
      { no:1, item:'Knee Arthroscopy Drape x1', spec:'With liquid collection pouch + 2 leg hole apertures' },
      { no:2, item:'Cling Wrap x1', spec:'For covering extremity area' },
      { no:3, item:'Cautry Bag x1', spec:'SMMS 43 GSM' },
      { no:4, item:'Wrapper x1', spec:'SMMS 35 GSM' }
    ])
  },
  {
    sku: '003012CTN', variantGroup: 'shoulder-arthroscopy-drape', variantLabel: 'CTN Standard',
    kitContents: JSON.stringify([
      { no:1, item:'Hand O Drape x1', spec:'O Drape for Shoulder Arthroscopy — 160 x 160 CMS' },
      { no:2, item:'Shoulder U Drape x2', spec:'U Drape — 160 x 200 CMS (Upper or Lower)' },
      { no:3, item:'Large Sheet x2', spec:'SMMS 43 GSM — 200 x 160 CMS + Adhesive' },
      { no:4, item:'Medium Sheet with ABS x2', spec:'SMMS 43 GSM — 100 x 80 CMS, 60 x 72 CMS Absorbant' },
      { no:5, item:'Medium Sheet Plain x2', spec:'SMMS 35 GSM — 100 x 80 CMS' },
      { no:6, item:'Trolley Sheet x1', spec:'PP+PE Laminated 40 GSM — 200 x 160 CMS' },
      { no:7, item:'Cling Wrap x1', spec:'For covering extremity area' },
      { no:8, item:'Wrapper x1', spec:'SMMS 35 GSM — 100 x 80 CMS' }
    ])
  },
  {
    sku: 'HERNIA-GEN', variantGroup: 'hernia-drape-pack', variantLabel: 'Standard',
    kitContents: JSON.stringify([
      { no:1, item:'Surgeon Gown Standard x4', spec:'SMMS 43 GSM — 160 x 135 CMS' },
      { no:2, item:'Hand Towel x4', spec:'Spun Lace 45 GSM — 32 x 32 CMS' },
      { no:3, item:'Large Sheet with Release x2', spec:'SMMS 43 GSM — 200 x 160 CMS + Release Tape' },
      { no:4, item:'Small Sheet with Absorbant x6', spec:'SMMS 43 GSM — 100 x 80 CMS + Absorbant Patch' },
      { no:5, item:'Medium Sheet Plain x1', spec:'SMMS 43 GSM — 100 x 80 CMS' },
      { no:6, item:'Cautry Bag x1', spec:'SMMS 43 GSM — 30 x 30 CMS' },
      { no:7, item:'Wrapper x1', spec:'SMS 100 x 80 CMS' }
    ])
  },

  // ============================================================
  // CATEGORY 2: SURGEON GOWNS
  // ============================================================
  {
    sku: '001003STD', variantGroup: 'surgeon-gowns', variantLabel: 'Standard',
    kitContents: JSON.stringify([
      { no:1, item:'Surgeon Gown Standard', spec:'SMMS 43 GSM — 135 x 160 CMS, EO Sterile, HSN: 62101000' }
    ])
  },
  {
    sku: '001003XXL', variantGroup: 'surgeon-gowns', variantLabel: 'Wraparound',
    kitContents: JSON.stringify([
      { no:1, item:'Surgeon Gown Wraparound', spec:'SMMS 43 GSM — 160 x 200 CMS, EO Sterile' }
    ])
  },
  {
    sku: '001003RFD', variantGroup: 'surgeon-gowns', variantLabel: 'Wraparound & Reinforced',
    kitContents: JSON.stringify([
      { no:1, item:'Surgeon Gown Wraparound & Reinforced', spec:'SMMS 43 GSM — 160 x 200 CMS, EO Sterile' }
    ])
  },
  {
    sku: '001003SFD', variantGroup: 'surgeon-gowns', variantLabel: 'Standard / Reinforced',
    kitContents: JSON.stringify([
      { no:1, item:'Surgeon Gown Standard/Reinforced', spec:'SMMS 43 GSM — 135 x 160 CMS, EO Sterile' }
    ])
  },
  {
    sku: '001003WFD', variantGroup: 'surgeon-gowns', variantLabel: 'Wraparound Body Reinforced',
    kitContents: JSON.stringify([
      { no:1, item:'Surgeon Gown Wraparound Body Reinforced', spec:'SMMS 43 GSM — 160 x 200 CMS, EO Sterile' }
    ])
  },
  {
    sku: '001003BFD', variantGroup: 'surgeon-gowns', variantLabel: 'Standard / Body Reinforced',
    kitContents: JSON.stringify([
      { no:1, item:'Surgeon Gown Standard/Body Reinforced', spec:'SMMS 43 GSM — 135 x 160 CMS, EO Sterile' }
    ])
  },
  {
    sku: '001003PSB', variantGroup: 'surgeon-gowns', variantLabel: 'Isolation Gown',
    kitContents: JSON.stringify([
      { no:1, item:'Isolation Gown', spec:'PPSB 43 GSM — 160 x 135 CMS, Non-Sterile' }
    ])
  },

  // ============================================================
  // CATEGORY 3: PATIENT GOWNS & WEAR
  // ============================================================
  {
    sku: '001002GEN', variantGroup: 'patient-gowns', variantLabel: 'Standard',
    kitContents: JSON.stringify([{ no:1, item:'Patient Gown Standard', spec:'SMMS 35 GSM — 160 x 120 CMS' }])
  },
  {
    sku: '001002FSL', variantGroup: 'patient-gowns', variantLabel: 'Full Sleeve',
    kitContents: JSON.stringify([{ no:1, item:'Patient Gown Full Sleeve', spec:'SMMS 43 GSM — 160 x 125 CMS' }])
  },
  {
    sku: '001002SLS', variantGroup: 'patient-gowns', variantLabel: 'Sleeveless',
    kitContents: JSON.stringify([{ no:1, item:'Patient Gown Sleeveless', spec:'SMMS 43 GSM — 160 x 130 CMS' }])
  },
  {
    sku: '001001GNA', variantGroup: 'patient-wear-kits', variantLabel: 'Model A — With Drape Sheet',
    kitContents: JSON.stringify([
      { no:1, item:'Patient Gown Half Sleeve x1', spec:'SMMS Fabric' },
      { no:2, item:'Bouffant Cap x1', spec:'Disposable' },
      { no:3, item:'Shoe Cover x1', spec:'Disposable' },
      { no:4, item:'Drape Sheet x1', spec:'SMMS Fabric' }
    ])
  },
  {
    sku: '001001GNB', variantGroup: 'patient-wear-kits', variantLabel: 'Model B — Basic Kit',
    kitContents: JSON.stringify([
      { no:1, item:'Patient Gown Half Sleeve x1', spec:'SMMS Fabric' },
      { no:2, item:'Bouffant Cap x1', spec:'Disposable' },
      { no:3, item:'Shoe Cover x1', spec:'Disposable' }
    ])
  },
  {
    sku: '001001GNC', variantGroup: 'patient-wear-kits', variantLabel: 'Model C — Sleeveless',
    kitContents: JSON.stringify([
      { no:1, item:'Patient Gown Sleeveless x1', spec:'SMMS Fabric' },
      { no:2, item:'Bouffant Cap x1', spec:'Disposable' },
      { no:3, item:'Shoe Cover x1', spec:'Disposable' }
    ])
  },
  {
    sku: '001001GND', variantGroup: 'patient-wear-kits', variantLabel: 'Model D — With Panties',
    kitContents: JSON.stringify([
      { no:1, item:'Patient Gown Half Sleeve x1', spec:'SMMS Fabric' },
      { no:2, item:'Bouffant Cap x1', spec:'Disposable' },
      { no:3, item:'Shoe Cover x1', spec:'Disposable' },
      { no:4, item:'Panties x1', spec:'Disposable' }
    ])
  },
  // ============================================================
  // CATEGORY 4: BED SHEETS
  // ============================================================
  {
    sku: '001008SMS', variantGroup: 'bed-sheets', variantLabel: 'SMS — 35 GSM Blue',
    kitContents: JSON.stringify([
      { no:1, item:'Disposable Bed Sheet', spec:'SMMS/SMS 35 GSM — 160 x 220 CMS' },
      { no:2, item:'Pillow Cover', spec:'55 x 70 CMS' }
    ])
  },
  {
    sku: '001008BLU', variantGroup: 'bed-sheets', variantLabel: 'Blue — 25 GSM',
    kitContents: JSON.stringify([
      { no:1, item:'Disposable Bed Sheet - Blue', spec:'SMMS/SMS 25 GSM — 160 x 220 CMS' },
      { no:2, item:'Pillow Cover', spec:'55 x 70 CMS' }
    ])
  },
  {
    sku: '001008YEL', variantGroup: 'bed-sheets', variantLabel: 'Yellow — 25 GSM',
    kitContents: JSON.stringify([
      { no:1, item:'Disposable Bed Sheet - Yellow', spec:'SMMS/SMS 25 GSM — 160 x 220 CMS' },
      { no:2, item:'Pillow Cover', spec:'55 x 70 CMS' }
    ])
  },
  {
    sku: '001008PSB', variantGroup: 'bed-sheets', variantLabel: 'PPSB — 35 GSM',
    kitContents: JSON.stringify([
      { no:1, item:'Disposable Bed Sheet - PPSB', spec:'PPSB 35 GSM — 160 x 220 CMS' },
      { no:2, item:'Pillow Cover', spec:'55 x 70 CMS' }
    ])
  },
  {
    sku: '001007SMS', variantGroup: 'bed-sheets', variantLabel: 'Examination Couch Sheet',
    kitContents: JSON.stringify([
      { no:1, item:'Examination Couch Sheet', spec:'SMMS/SMS 25 GSM / PPSB 30 GSM — 80 x 210 CMS' }
    ])
  },
  {
    sku: '001012SMF', variantGroup: 'bed-sheets', variantLabel: 'Covering Sheet',
    kitContents: JSON.stringify([
      { no:1, item:'Covering Sheet', spec:'SMMS/SMS 35 GSM — 160 x 200 CMS' }
    ])
  },
  {
    sku: '001008ELO', variantGroup: 'bed-sheets', variantLabel: 'Elastic — 35 GSM',
    kitContents: JSON.stringify([
      { no:1, item:'Disposable Bed Sheet with Elastic', spec:'SMMS/SMS 35 GSM — 160 x 220 CMS' },
      { no:2, item:'Pillow Cover', spec:'55 x 70 CMS' }
    ])
  },

  // ============================================================
  // CATEGORY 5: OT SHEETS
  // ============================================================
  {
    sku: '001026PLN', variantGroup: 'ot-large-sheets', variantLabel: 'Large Sheet Plain',
    kitContents: JSON.stringify([{ no:1, item:'Large Sheet Plain', spec:'SMMS/SMS 43 GSM — 160 x 200 CMS, Sterile Pouch/EO Pouch' }])
  },
  {
    sku: '001026LAR', variantGroup: 'ot-large-sheets', variantLabel: 'Large Sheet with Release Tape',
    kitContents: JSON.stringify([{ no:1, item:'Large Sheet with Release Tape', spec:'SMMS/SMS 43 GSM — 160 x 200 CMS, 2m Double Side Release Tape on 200 CMS side' }])
  },
  {
    sku: '001026ABS', variantGroup: 'ot-large-sheets', variantLabel: 'Large Sheet with Release + Absorbent',
    kitContents: JSON.stringify([{ no:1, item:'Large Sheet with Release Tape + Absorbent', spec:'SMMS/SMS 43 GSM — 160 x 220 CMS, 2m Double Side Release Tape' }])
  },
  {
    sku: '001026PRM', variantGroup: 'ot-large-sheets', variantLabel: 'Extra Large — Premium',
    kitContents: JSON.stringify([{ no:1, item:'Extra Large Sheet with Release Tape Premium', spec:'SMMS/SMS 25 GSM / PPSB 30 GSM — 80 x 210 CMS' }])
  },
  {
    sku: '001029PLN', variantGroup: 'ot-medium-sheets', variantLabel: 'Medium Sheet Plain',
    kitContents: JSON.stringify([{ no:1, item:'Medium Sheet Plain', spec:'SMMS/SMS 43 GSM — 100 x 160 CMS, Sterile Pouch/EO STE' }])
  },
  {
    sku: '001029MED', variantGroup: 'ot-medium-sheets', variantLabel: 'Medium Sheet with Release Tape',
    kitContents: JSON.stringify([{ no:1, item:'Medium Sheet with Release Tape', spec:'SMMS/SMS 43 GSM — 160 x 200 CMS, 2m Double Side Release Tape' }])
  },
  {
    sku: '001032LAR', variantGroup: 'ot-trolley-sheets', variantLabel: 'Trolley Sheet Large',
    kitContents: JSON.stringify([{ no:1, item:'Trolley Sheet Large', spec:'PPSB + PE Laminated 40 GSM — 160 x 200 CMS, Sterile Pouch/EO Sterile' }])
  },
  {
    sku: '001032MED', variantGroup: 'ot-trolley-sheets', variantLabel: 'Trolley Sheet Medium',
    kitContents: JSON.stringify([{ no:1, item:'Trolley Sheet Medium', spec:'PPSB + PE Laminated 40 GSM — 120 x 160 CMS, Sterile Pouch/EO Sterile' }])
  },
  {
    sku: '001032PRM', variantGroup: 'ot-trolley-sheets', variantLabel: 'Trolley Sheet Premium',
    kitContents: JSON.stringify([{ no:1, item:'Trolley Sheet Premium', spec:'PPSB + PE Laminated 60 GSM — 120 x 160 CMS, Sterile Pouch/EO Sterile' }])
  },
  // ============================================================
  // CATEGORY 6: WRAPPING SHEETS
  // ============================================================
  {
    sku: '001019ECO', variantGroup: 'wrapping-sheets', variantLabel: '35 GSM — 50x50 CMS',
    kitContents: JSON.stringify([{ no:1, item:'Wrapping Sheet 35 GSM', spec:'SMMS Fabric — 50 x 50 CMS, 500 pcs/bundle, Non-Sterile' }])
  },
  {
    sku: '001020ECO', variantGroup: 'wrapping-sheets', variantLabel: '35 GSM — 75x75 CMS',
    kitContents: JSON.stringify([{ no:1, item:'Wrapping Sheet 35 GSM', spec:'SMMS Fabric — 75 x 75 CMS, 250 pcs/bundle, Non-Sterile' }])
  },
  {
    sku: '001021ECO', variantGroup: 'wrapping-sheets', variantLabel: '35 GSM — 90x90 CMS',
    kitContents: JSON.stringify([{ no:1, item:'Wrapping Sheet 35 GSM', spec:'SMMS Fabric — 90 x 90 CMS, 250 pcs/bundle, Non-Sterile' }])
  },
  {
    sku: '001018ECO', variantGroup: 'wrapping-sheets', variantLabel: '35 GSM — 100x100 CMS',
    kitContents: JSON.stringify([{ no:1, item:'Wrapping Sheet 35 GSM', spec:'SMMS Fabric — 100 x 100 CMS, 200 pcs/bundle, Non-Sterile' }])
  },
  {
    sku: '001017ECO', variantGroup: 'wrapping-sheets', variantLabel: '35 GSM — 120x120 CMS',
    kitContents: JSON.stringify([{ no:1, item:'Wrapping Sheet 35 GSM', spec:'SMMS Fabric — 120 x 120 CMS, 150 pcs/bundle, Non-Sterile' }])
  },
  {
    sku: '001023ECO', variantGroup: 'wrapping-sheets', variantLabel: '35 GSM — 160x160 CMS',
    kitContents: JSON.stringify([{ no:1, item:'Wrapping Sheet 35 GSM', spec:'SMMS Fabric — 160 x 160 CMS, 100 pcs/bundle, Non-Sterile' }])
  },
  {
    sku: '001019CMC', variantGroup: 'wrapping-sheets', variantLabel: '43 GSM — 50x50 CMS',
    kitContents: JSON.stringify([{ no:1, item:'Wrapping Sheet 43 GSM', spec:'SMMS Fabric — 50 x 50 CMS, 500 pcs/bundle, Non-Sterile' }])
  },
  {
    sku: '001020CMC', variantGroup: 'wrapping-sheets', variantLabel: '43 GSM — 75x75 CMS',
    kitContents: JSON.stringify([{ no:1, item:'Wrapping Sheet 43 GSM', spec:'SMMS Fabric — 75 x 75 CMS, 250 pcs/bundle, Non-Sterile' }])
  },
  {
    sku: '001021CMC', variantGroup: 'wrapping-sheets', variantLabel: '43 GSM — 90x90 CMS',
    kitContents: JSON.stringify([{ no:1, item:'Wrapping Sheet 43 GSM', spec:'SMMS Fabric — 90 x 90 CMS, 250 pcs/bundle, Non-Sterile' }])
  },
  {
    sku: '001018CMC', variantGroup: 'wrapping-sheets', variantLabel: '43 GSM — 100x100 CMS',
    kitContents: JSON.stringify([{ no:1, item:'Wrapping Sheet 43 GSM', spec:'SMMS Fabric — 100 x 100 CMS, 200 pcs/bundle, Non-Sterile' }])
  },
  {
    sku: '001017CMC', variantGroup: 'wrapping-sheets', variantLabel: '43 GSM — 120x120 CMS',
    kitContents: JSON.stringify([{ no:1, item:'Wrapping Sheet 43 GSM', spec:'SMMS Fabric — 120 x 120 CMS, 150 pcs/bundle, Non-Sterile' }])
  },
  {
    sku: '001023CMC', variantGroup: 'wrapping-sheets', variantLabel: '43 GSM — 160x160 CMS',
    kitContents: JSON.stringify([{ no:1, item:'Wrapping Sheet 43 GSM', spec:'SMMS Fabric — 160 x 160 CMS, 100 pcs/bundle, Non-Sterile' }])
  }

]

async function main() {
  let updated = 0, notFound = 0
  for (const p of products) {
    const result = await prisma.product.updateMany({
      where: { sku: p.sku },
      data: {
        variantGroup: p.variantGroup,
        variantLabel: p.variantLabel,
        kitContents: p.kitContents
      }
    })
    if (result.count > 0) {
      console.log(`✅ ${p.sku} — ${p.variantLabel}`)
      updated++
    } else {
      console.log(`⚠️  NOT FOUND: ${p.sku}`)
      notFound++
    }
  }
  console.log(`\n✅ Updated: ${updated} | ⚠️ Not found: ${notFound}`)
  await prisma.$disconnect()
}
main()
