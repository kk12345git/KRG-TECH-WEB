import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const productUpdates = [
  {
    sku: "001039SMS",
    hospitalPrice: "Rs.700 + 5% GST",
    mrp: "Rs.2000 incl GST",
    gstRate: "5%",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Standard x5", spec:"SMMS 43 GSM - 160 x 135 CMS" },
      { no:2, item:"Hand Towel x5", spec:"Spun Lace 45 GSM - 32 x 32 CMS" },
      { no:3, item:"Large Sheet with Release x2", spec:"SMMS 50 GSM - 200 x 160 CMS" },
      { no:4, item:"Small Sheet with Absorbent x4", spec:"SMMS/Spun Lace 68 GSM - 100 x 80 CMS" },
      { no:5, item:"Mayo Stand Cover x1", spec:"PP+PE Laminated 40 GSM - 150 x 160 CMS" },
      { no:6, item:"Trolley Sheet x1", spec:"PP+PE Laminated 40 GSM - 120 x 160 CMS" },
      { no:7, item:"Cautry Bag x1", spec:"SMMS 43 GSM - 30 x 30 CMS" },
      { no:8, item:"Wrapper x1", spec:"SMMS 35 GSM - 80 x 100 CMS" }
    ])
  },
  {
    sku: "001039SAV",
    hospitalPrice: "Rs.700 + 5% GST",
    mrp: "Rs.2000 incl GST",
    gstRate: "5%",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Standard x3", spec:"SMMS 43 GSM - 160 x 135 CMS" },
      { no:2, item:"Hand Towel x3", spec:"Spun Lace 45 GSM - 32 x 32 CMS" },
      { no:3, item:"Large Sheet x2", spec:"SMMS 50 GSM - 200 x 160 CMS" },
      { no:4, item:"Small Sheet with Absorbent x4", spec:"SMMS/Spun Lace 68 GSM - 100 x 80 CMS" },
      { no:5, item:"Mayo Stand Cover x1", spec:"PP+PE Laminated 40 GSM - 150 x 160 CMS" },
      { no:6, item:"Trolley Sheet x1", spec:"PP+PE Laminated 40 GSM - 120 x 160 CMS" },
      { no:7, item:"Cautry Bag x1", spec:"SMMS 43 GSM - 30 x 30 CMS" },
      { no:8, item:"Wrapper x1", spec:"SMMS 35 GSM - 80 x 100 CMS" }
    ])
  },
  {
    sku: "002002SRH",
    hospitalPrice: "Rs.720 + 5% GST",
    mrp: "Rs.2000 incl GST",
    gstRate: "5%",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Standard x3", spec:"SMMS 43 GSM - 160 x 135 CMS" },
      { no:2, item:"Hand Towel x3", spec:"Spun Lace 45 GSM - 32 x 32 CMS" },
      { no:3, item:"Large Sheet with Release x2", spec:"SMMS 43 GSM - 200 x 160 CMS" },
      { no:4, item:"Center Hole Sheet x1", spec:"SMMS 43 GSM - 160 x 200 CMS, Fenestration 20x25 CMS" },
      { no:5, item:"Small Sheet with Absorbent x4", spec:"SMMS/Spun Lace 68 GSM - 100 x 80 CMS" },
      { no:6, item:"Small Sheet Plain x1", spec:"SMMS 43 GSM - 100 x 80 CMS" },
      { no:7, item:"Trolley Sheet x1", spec:"PP+PE Laminated Sheet" },
      { no:8, item:"Wrapper x1", spec:"SMMS 35 GSM - 80 x 100 CMS" }
    ])
  },
  {
    sku: "003009FOR",
    hospitalPrice: "Rs.1450 + 5% GST",
    mrp: "Rs.3500 incl GST",
    gstRate: "5%",
    kitContents: JSON.stringify([
      { no:1, item:"Reinforced Surgeon Gown x5", spec:"SMMS 43 GSM - 200 x 160 CMS, PE+PP Lamination patches" },
      { no:2, item:"Hand Towel x5", spec:"Spun Lace 45 GSM - 32 x 32 CMS" },
      { no:3, item:"Wrapper x1", spec:"SMS 35 GSM - 80 x 100 CMS" },
      { no:4, item:"Ortho Drape x1", spec:"PP+PP Lamination 40 GSM - 200 x 160 CMS" },
      { no:5, item:"Large Sheet Release x6", spec:"SMMS 50 GSM - 200 x 160 CMS with Release" },
      { no:6, item:"Large Sheet Plain x1", spec:"SMMS 50 GSM - 200 x 160 CMS" },
      { no:7, item:"60 inch Sheet x1", spec:"SMMS 43 GSM - 100 x 160 CMS" },
      { no:8, item:"Small Sheet with Absorbent x4", spec:"SMMS 43 / Spun Lace 68 GSM - 100 x 80 CMS" },
      { no:9, item:"Small Sheet Plain x2", spec:"SMMS 43 GSM - 100 x 80 CMS" },
      { no:10, item:"Trolley Sheet x1", spec:"PP+PE Laminated 40 GSM - 200 x 160 CMS" },
      { no:11, item:"Cautry Bag x1", spec:"SMMS 43 GSM - 30 x 40 CMS" },
      { no:12, item:"Wrapper x1", spec:"SMS 100 x 80 CMS" }
    ])
  },
  {
    sku: "003009DVK",
    hospitalPrice: "Rs.1270 + 12% GST",
    mrp: "Rs.3750 incl GST",
    gstRate: "12%",
    kitContents: JSON.stringify([
      { no:1, item:"Reinforced Surgeon Gown x5", spec:"SMMS 43 GSM - 200 x 160 CMS, PE+PP Lamination patches" },
      { no:2, item:"Hand Towel x5", spec:"Spun Lace 45 GSM - 32 x 32 CMS" },
      { no:3, item:"Wrapper x1", spec:"SMS 35 GSM - 80 x 100 CMS" },
      { no:4, item:"Ortho Drape x1", spec:"PP+PP Lamination 40 GSM - 200 x 160 CMS" },
      { no:5, item:"Large Sheet x3", spec:"SMMS 50 GSM - 200 x 160 CMS" },
      { no:6, item:"60 inch Sheet x2", spec:"SMMS 43 GSM - 100 x 160 CMS" },
      { no:7, item:"Small Sheet with Absorbent x4", spec:"SMMS 43 / Spun Lace 68 GSM - 100 x 80 CMS" },
      { no:8, item:"Small Sheet Plain x4", spec:"SMMS 43 GSM - 100 x 80 CMS" },
      { no:9, item:"Trolley Sheet x1", spec:"PP+PE Laminated 40 GSM - 200 x 160 CMS" },
      { no:10, item:"Cautry Bag x1", spec:"SMMS 43 GSM - 30 x 40 CMS" },
      { no:11, item:"Wrapper x1", spec:"SMS 100 x 80 CMS" }
    ])
  },
  {
    sku: "003009SAI",
    hospitalPrice: "Rs.930 + 5% GST",
    gstRate: "5%",
    kitContents: JSON.stringify([
      { no:1, item:"Reinforced Surgeon Gown x4", spec:"SMMS 43 GSM - 200 x 160 CMS, PE+PP Lamination patches" },
      { no:2, item:"Hand Towel x4", spec:"Spun Lace 45 GSM - 32 x 32 CMS" },
      { no:3, item:"Ortho Drape x1", spec:"PP+PP Lamination 40 GSM - 200 x 160 CMS" },
      { no:4, item:"Large Sheet x4", spec:"SMMS 50 GSM - 200 x 160 CMS" },
      { no:5, item:"60 inch Sheet x2", spec:"SMMS 43 GSM - 100 x 160 CMS" },
      { no:6, item:"Small Sheet Plain x6", spec:"SMMS 43 GSM - 100 x 80 CMS" },
      { no:7, item:"Trolley Sheet x1", spec:"PP+PE Laminated 40 GSM - 200 x 160 CMS" },
      { no:8, item:"Cautry Bag x1", spec:"SMMS 43 GSM - 30 x 30 CMS" },
      { no:9, item:"Wrapper x1", spec:"SMS 100 x 80 CMS" }
    ])
  },
  {
    sku: "5007PMS",
    hospitalPrice: "Rs.1950 + 12% GST",
    mrp: "Rs.4800 incl GST",
    gstRate: "12%",
    kitContents: JSON.stringify([
      { no:1, item:"Reinforced Surgeon Gown x5", spec:"SMMS 43 GSM - 197 x 160 CMS, PE+PP Lamination patches" },
      { no:2, item:"Hand Towel x10", spec:"Spun Lace 45 GSM - 32 x 32 CMS" },
      { no:3, item:"Cautry Bag x2", spec:"SMMS 43 GSM - 30 x 30 CMS" },
      { no:4, item:"Mayo Stand Cover x1", spec:"PP+PE Laminated 40 GSM - 150 x 160 CMS" },
      { no:5, item:"Mayo Stand Cover Sheet Form x1", spec:"PP+PE Laminated 40 GSM - 100 x 160 CMS" },
      { no:6, item:"Basin Sheet x2", spec:"SMMS 43 GSM - 130 x 160 CMS" },
      { no:7, item:"Large Sheet RFD x1", spec:"PP+PE Laminated 60 GSM - 160 x 160 CMS" },
      { no:8, item:"Trolley Sheet x1", spec:"PP+PE Laminated 40 GSM - 220 x 160 CMS" },
      { no:9, item:"Rolling Sheet x1", spec:"SMMS 43 GSM - 45 x 75 CMS" },
      { no:10, item:"Screen Sheet with Release + Absorbant Patch x1", spec:"SMMS 43 GSM - 220 x 160 CMS" },
      { no:11, item:"Side Sheet Absorbant x2", spec:"100% Spun Lace Laminated 73 GSM - 100 x 80 CMS" },
      { no:12, item:"Triangle Sheet x2", spec:"SMMS 43 GSM - 80 x 80 CMS" },
      { no:13, item:"Abdominal Sheet x1", spec:"SMMS 43 GSM - 160 x 160 CMS" },
      { no:14, item:"Papper Sheet x1", spec:"Spun Lace Lamination 73 GSM - 100 x 72.5 CMS" },
      { no:15, item:"Groin Sheet x1", spec:"SMMS 43 GSM" },
      { no:16, item:"Long Sheet x1", spec:"SMMS 43 GSM" },
      { no:17, item:"Side Sheet Plain x1", spec:"SMMS 43 GSM" },
      { no:18, item:"Wrapper x1", spec:"SMMS 35 GSM" }
    ])
  },
  {
    sku: "5007VMC",
    hospitalPrice: "Rs.1950 + 12% GST",
    mrp: "Rs.4800 incl GST",
    gstRate: "12%",
    kitContents: JSON.stringify([
      { no:1, item:"Reinforced Surgeon Gown x5", spec:"SMMS 43 GSM - 197 x 160 CMS, 60 GSM Microporous Lamination patches" },
      { no:2, item:"Hand Towel x5", spec:"Spun Lace 45 GSM - 32 x 32 CMS" },
      { no:3, item:"Long Sheet x5", spec:"SMMS 50 GSM - 250 x 160 CMS + 2 inch Release Tape" },
      { no:4, item:"Medium Sheet with Absorbant Patch x4", spec:"SMMS 50 GSM - 100 x 100 CMS + Spun Lace 68 GSM patch" },
      { no:5, item:"Medium Sheet Plain x4", spec:"SMMS 50 GSM - 100 x 100 CMS" },
      { no:6, item:"Groin Sheet with Release Tape x2", spec:"SMMS 50 GSM - 51 x 34 CMS" },
      { no:7, item:"Trolley Sheet Large x1", spec:"PP+PE Laminated 60 GSM - 240 x 240 CMS" },
      { no:8, item:"Trolley Sheet x2", spec:"PP+PE Laminated 60 GSM - 200 x 160 CMS" },
      { no:9, item:"Trolley Sheet Medium x1", spec:"PP+PE Laminated 60 GSM - 150 x 160 CMS" },
      { no:10, item:"Cautry Bag x5", spec:"45 x 30 CMS with 2 Release Tapes" },
      { no:11, item:"Wrapper x1", spec:"SMMS 35 GSM - 100 x 80 CMS" }
    ])
  },
  {
    sku: "002014SKS",
    hospitalPrice: "Rs.660 + 5% GST",
    mrp: "Rs.1800 incl GST",
    gstRate: "5%",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Standard x3", spec:"SMMS 43 GSM - 160 x 135 CMS" },
      { no:2, item:"Hand Towel x3", spec:"Spun Lace 40 GSM - 40 x 40 CMS" },
      { no:3, item:"Center Hole Sheet x2", spec:"SMMS 43 GSM - 100 x 60 CMS" },
      { no:4, item:"Large Sheet x2", spec:"SMMS 43 GSM - 200 x 160 CMS" },
      { no:5, item:"Trolley Sheet x1", spec:"PP+PE Laminated 40 GSM - 100 x 80 CMS" },
      { no:6, item:"Small Sheet Plain x1", spec:"SMMS 43 GSM - 100 x 80 CMS" },
      { no:7, item:"Small Sheet Plain Release x1", spec:"SMMS 43 GSM - 100 x 160 CMS" },
      { no:8, item:"Leggings Pair x1", spec:"SMMS 43 GSM - 100 x 80 CMS" },
      { no:9, item:"Wrapper x1", spec:"SMMS 35 GSM - 100 x 160 CMS" },
      { no:10, item:"Plain Sheet Release x1", spec:"SMMS 43 GSM - 100 x 160 CMS" }
    ])
  },
  {
    sku: "002012SAI",
    hospitalPrice: "Rs.665 + 5% GST",
    gstRate: "5%",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Standard x4", spec:"SMMS 43 GSM - 160 x 135 CMS" },
      { no:2, item:"Hand Towel x4", spec:"Spun Lace 45 GSM - 32 x 32 CMS" },
      { no:3, item:"Center Hole Sheet with Fluid Collection Pouch x1", spec:"SMMS 200 x 160 CMS + Spun Lace 68 GSM absorbant around fenestration" },
      { no:4, item:"Large Sheet with Release x1", spec:"SMMS 43 GSM - 200 x 160 CMS" },
      { no:5, item:"Small Sheet with Absorbent x3", spec:"SMMS 43 GSM - 100 x 80 CMS + Absorbant Patch" },
      { no:6, item:"Hip Legging Pair x1", spec:"SMMS 43 GSM - 120 x 140 CMS" },
      { no:7, item:"Cautry Bag x1", spec:"SMMS 43 GSM - 30 x 30 CMS" },
      { no:8, item:"Trolley Sheet x1", spec:"PP+PE Laminated - 120 x 160 CMS" },
      { no:9, item:"Wrapper x1", spec:"SMS 100 x 80 CMS" }
    ])
  },
  {
    sku: "003003PMR",
    hospitalPrice: "Rs.1475 + 12% GST",
    mrp: "Rs.3500 incl GST",
    gstRate: "12%",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Reinforced x4", spec:"SMMS 43 GSM - 160 x 135 CMS" },
      { no:2, item:"Hand Towel x4", spec:"Spun Lace 45 GSM - 32 x 32 CMS" },
      { no:3, item:"Wrapper x1", spec:"SMMS 35 GSM - 100 x 80 CMS" },
      { no:4, item:"Knee O Drape x1", spec:"SMMS 50 GSM - 320 x 240 CMS, 2 side release tape, Spun Lace absorbant on rubber aperture, PE+PP Laminated reinforced" },
      { no:5, item:"Large Sheet Release x2", spec:"SMMS 43 GSM - 200 x 160 CMS" },
      { no:6, item:"Small Sheet with Absorbent x2", spec:"SMMS/Spun Lace 68 GSM - 100 x 80 CMS" },
      { no:7, item:"Trolley Sheet x4", spec:"PP+PE Laminated 40 GSM - 200 x 160 CMS" }
    ])
  },
  {
    sku: "003004PRM",
    hospitalPrice: null,
    mrp: null,
    gstRate: null,
    kitContents: JSON.stringify([
      { no:1, item:"U Drape x1", spec:"SMMS 50 GSM - 340 x 240 CMS, bottom reinforced PP+PE 60 GSM, U fenestration with release tape" },
      { no:2, item:"Large Sheet x1", spec:"SMMS 43 GSM - 200 x 160 CMS" },
      { no:3, item:"Small Sheet with Absorbent x1", spec:"SMMS/Spun Lace 68 GSM - 100 x 80 CMS" },
      { no:4, item:"Cautry Bag x1", spec:"SMMS 43 GSM - 30 x 30 CMS" },
      { no:5, item:"Wrapper x1", spec:"SMMS 35 GSM - 100 x 80 CMS" }
    ])
  },
  {
    sku: "003011CTN",
    hospitalPrice: null,
    mrp: null,
    gstRate: null,
    kitContents: JSON.stringify([
      { no:1, item:"Knee Arthroscopy Drape x1", spec:"With liquid collection pouch and 2 leg hole apertures" },
      { no:2, item:"Cling Wrap x1", spec:"For covering extremity area" },
      { no:3, item:"Cautry Bag x1", spec:"SMMS 43 GSM" },
      { no:4, item:"Wrapper x1", spec:"SMMS 35 GSM" }
    ])
  },
  {
    sku: "002007GEN",
    hospitalPrice: null,
    mrp: null,
    gstRate: null,
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Standard x1", spec:"SMMS 43 GSM - 160 x 135 CMS" },
      { no:2, item:"Hand Towel x1", spec:"Spun Lace 45 GSM - 32 x 32 CMS" },
      { no:3, item:"Center Hole Sheet x1", spec:"SMMS 43 GSM - 100 x 160 CMS" },
      { no:4, item:"Leggings Pair x1", spec:"SMMS 43 GSM - 120 x 140 CMS" },
      { no:5, item:"Wrapper x1", spec:"SMMS 43 GSM - 100 x 80 CMS" }
    ])
  },
  {
    sku: "002010GEN",
    hospitalPrice: null,
    mrp: null,
    gstRate: null,
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Standard x2", spec:"SMMS 43 GSM - 160 x 135 CMS" },
      { no:2, item:"Hand Towel x2", spec:"Spun Lace 45 GSM - 32 x 32 CMS" },
      { no:3, item:"Center Hole Sheet x1", spec:"SMMS 43 GSM - 120 x 160 CMS" },
      { no:4, item:"Trolley Sheet x1", spec:"PP+PE Laminated 40 GSM - 120 x 160 CMS" },
      { no:5, item:"Small Sheet with Release x4", spec:"SMMS 43 GSM - 100 x 80 CMS" },
      { no:6, item:"Cautry Bag x1", spec:"SMMS 43 GSM - 30 x 30 CMS" },
      { no:7, item:"Wrapper x1", spec:"SMMS 35 GSM - 100 x 80 CMS" }
    ])
  },
  {
    sku: "004001GEN",
    hospitalPrice: null,
    mrp: null,
    gstRate: null,
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Standard x2", spec:"SMMS 43 GSM - 135 x 160 CMS" },
      { no:2, item:"Hand Towel x2", spec:"Spun Lace 40 GSM - 32 x 32 CMS" },
      { no:3, item:"Center Hole Sheet Plain x1", spec:"SMMS 43 GSM - 200 x 160 CMS" },
      { no:4, item:"Large Sheet Release with ABS x2", spec:"SMMS 43 GSM - 200 x 160 CMS" },
      { no:5, item:"Small Sheet with ABS x2", spec:"SMMS 43 GSM - 100 x 80 CMS" },
      { no:6, item:"Leggings Pair x1", spec:"SMMS 43 GSM - 100 x 80 CMS" },
      { no:7, item:"Cautry Bag x2", spec:"SMMS 43 GSM - 120 x 140 CMS" },
      { no:8, item:"Wrapper x1", spec:"SMMS 35 GSM - 100 x 80 CMS" }
    ])
  },
  {
    sku: "006006AHC",
    hospitalPrice: null,
    mrp: null,
    gstRate: null,
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Standard x3", spec:"SMMS 43 GSM - 160 x 135 CMS" },
      { no:2, item:"Hand Towel x3", spec:"Spun Lace 45 GSM - 32 x 32 CMS" },
      { no:3, item:"Large Sheet x2", spec:"SMMS 50 GSM - 200 x 160 CMS" },
      { no:4, item:"Center Hole Sheet x1", spec:"SMMS 50 GSM" },
      { no:5, item:"Small Sheet with Absorbent x4", spec:"SMMS/Spun Lace 68 GSM - 100 x 80 CMS" },
      { no:6, item:"Small Sheet Plain x1", spec:"SMMS 43 GSM - 100 x 80 CMS" },
      { no:7, item:"Trolley Sheet x1", spec:"PP+PE Laminated Sheet" }
    ])
  },
  {
    sku: "005005VJO",
    hospitalPrice: null,
    mrp: null,
    gstRate: null,
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Reinforced x2", spec:"SMMS 43 GSM - 160 x 200 CMS, PP+PE Lamination patch" },
      { no:2, item:"Hand Towel x2", spec:"32 x 32 CMS Spun Lace 45 GSM" },
      { no:3, item:"Angio Drape x1", spec:"PP+PE Laminated 60 GSM - 350 x 160 CMS" },
      { no:4, item:"Release Strips x2", spec:"SMS Adhesive Strips" },
      { no:5, item:"Wrapper cum Trolley Sheet x1", spec:"PP+PE Laminated 40 GSM - 160 x 200 CMS" }
    ])
  },
  {
    sku: "002004NFU",
    hospitalPrice: null,
    mrp: null,
    gstRate: null,
    kitContents: JSON.stringify([
      { no:1, item:"Maternity Mat with Fluid Collection Pouch x1", spec:"Underpad with fluid collection pack" },
      { no:2, item:"Large Sheet x1", spec:"SMMS 43 GSM" },
      { no:3, item:"Medium Sheet x1", spec:"SMMS 43 GSM" },
      { no:4, item:"Hip Legging x1", spec:"SMMS 43 GSM" },
      { no:5, item:"Apron x1", spec:"Disposable waterproof" },
      { no:6, item:"Baby Towel x1", spec:"Soft absorbent" },
      { no:7, item:"Cautry Bag x1", spec:"SMMS 43 GSM" },
      { no:8, item:"Buffant Cap x1", spec:"Disposable" },
      { no:9, item:"Cord Clamp x1", spec:"Sterile disposable" },
      { no:10, item:"Wrapper x1", spec:"SMMS 35 GSM" }
    ])
  },
  {
    sku: "002004SSS",
    hospitalPrice: null,
    mrp: null,
    gstRate: null,
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Standard x1", spec:"SMMS 43 GSM - 160 x 135 CMS" },
      { no:2, item:"Hand Towel x1", spec:"Spun Lace 45 GSM - 32 x 32 CMS" },
      { no:3, item:"Center Hole Sheet x1", spec:"SMMS 43 GSM - 120 x 160 CMS" },
      { no:4, item:"Maternity Mat x1", spec:"Underpad with fluid collection pack" },
      { no:5, item:"Leggings Pair x1", spec:"SMMS 43 GSM - 120 x 140 CMS" },
      { no:6, item:"Small Sheet Plain x1", spec:"SMMS 43 GSM - 100 x 160 CMS" },
      { no:7, item:"Small Sheet Laminated x1", spec:"PP+PE Laminated 40 GSM - 100 x 75 CMS" },
      { no:8, item:"Cleaning Wipes x1", spec:"Spun Lace 40 GSM - 60 x 60 CMS" },
      { no:9, item:"Wrapper x1", spec:"SMMS 35 GSM" }
    ])
  },
  {
    sku: "0010037SKS",
    hospitalPrice: null,
    mrp: null,
    gstRate: null,
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Wrap Around Reinforced x4", spec:"SMMS 43 GSM - 160 x 135 CMS" },
      { no:2, item:"Hand Towel x4", spec:"Spun Lace 45 GSM - 32 x 32 CMS" },
      { no:3, item:"Large Sheet with Release x8", spec:"SMMS 50 GSM - 220 x 160 CMS" },
      { no:4, item:"Trolley Sheet x1", spec:"PP+PE Laminated 60 GSM" },
      { no:5, item:"Wrapper x2", spec:"SMMS 35 GSM - 100 x 80 CMS" }
    ])
  },
  {
    sku: "001037KAU",
    hospitalPrice: null,
    mrp: null,
    gstRate: null,
    kitContents: JSON.stringify([
      { no:1, item:"Reinforced Surgeon Gown x3", spec:"SMMS 43 GSM - 197 x 160 CMS, PE+PP Lamination" },
      { no:2, item:"Hand Towel x3", spec:"Spun Lace 40 GSM - 32 x 32 CMS" },
      { no:3, item:"Wrapper x1", spec:"SMMS 35 GSM - 80 x 100 CMS" },
      { no:4, item:"Large Sheet Release x3", spec:"SMMS 43 GSM - 200 x 160 CMS" },
      { no:5, item:"Small Sheet with Absorbent x4", spec:"SMMS/Spun Lace 68 GSM - 100 x 80 CMS" },
      { no:6, item:"Trolley Sheet x1", spec:"PP+PE Laminated 40 GSM - 200 x 80 CMS" },
      { no:7, item:"Boot Cover Pair x3", spec:"Sewn from PP+PE Laminated Sheet" },
      { no:8, item:"Goggles x3", spec:"Protective eye goggles" },
      { no:9, item:"Surgical Gloves Pair x3", spec:"Sterile" },
      { no:10, item:"Face Mask x3", spec:"3-ply surgical" },
      { no:11, item:"Tudaug Cap x3", spec:"Disposable turban cap" }
    ])
  },
  {
    sku: "002013ARC",
    hospitalPrice: null,
    mrp: null,
    gstRate: null,
    kitContents: JSON.stringify([
      { no:1, item:"Large Sheet x1", spec:"SMMS 43 GSM - 200 x 160 CMS" },
      { no:2, item:"Leggings Pair x1", spec:"SMMS 43 GSM - 120 x 140 CMS" },
      { no:3, item:"Center Hole Sheet x1", spec:"SMMS 43 GSM - 80 x 160 CMS" },
      { no:4, item:"Wrapper x1", spec:"SMMS 35 GSM - 100 x 80 CMS" }
    ])
  },
  {
    sku: "001003STD",
    hospitalPrice: "Rs.72 + 5% GST",
    gstRate: "5%",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Standard", spec:"SMMS 43 GSM - 135 x 160 CMS, EO Sterile" }
    ])
  },
  {
    sku: "001003XXL",
    hospitalPrice: "Rs.85 + 5% GST",
    gstRate: "5%",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Wraparound", spec:"SMMS 43 GSM - 160 x 200 CMS, EO Sterile" }
    ])
  },
  {
    sku: "001003RFD",
    hospitalPrice: "Rs.150 + 5% GST",
    gstRate: "5%",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Wraparound & Reinforced", spec:"SMMS 43 GSM - 160 x 200 CMS, EO Sterile" }
    ])
  },
  {
    sku: "001003SFD",
    hospitalPrice: "Rs.102 + 5% GST",
    gstRate: "5%",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Standard/Reinforced", spec:"SMMS 43 GSM - 135 x 160 CMS, EO Sterile" }
    ])
  },
  {
    sku: "001003WFD",
    hospitalPrice: "Rs.100 + 5% GST",
    gstRate: "5%",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Wraparound Body Reinforced", spec:"SMMS 43 GSM - 160 x 200 CMS, EO Sterile" }
    ])
  },
  {
    sku: "001003BFD",
    hospitalPrice: "Rs.95 + 5% GST",
    gstRate: "5%",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Standard/Body Reinforced", spec:"SMMS 43 GSM - 135 x 160 CMS, EO Sterile" }
    ])
  },
  {
    sku: "001002GEN",
    hospitalPrice: "Rs.39.50",
    kitContents: JSON.stringify([
      { no:1, item:"Patient Gown Standard", spec:"SMMS 35 GSM - 160 x 120 CMS" }
    ])
  },
  {
    sku: "001002FSL",
    hospitalPrice: "Rs.44.50",
    kitContents: JSON.stringify([
      { no:1, item:"Patient Gown Full Sleeve", spec:"SMMS 43 GSM - 160 x 125 CMS" }
    ])
  },
  {
    sku: "001002SLS",
    hospitalPrice: "Rs.34.50",
    kitContents: JSON.stringify([
      { no:1, item:"Patient Gown Sleeveless", spec:"SMMS 43 GSM - 160 x 130 CMS" }
    ])
  },
  {
    sku: "001003PSB",
    hospitalPrice: "Rs.42.50",
    kitContents: JSON.stringify([
      { no:1, item:"Isolation Gown", spec:"PPSB 43 GSM - 160 x 135 CMS" }
    ])
  },
  {
    sku: "001008SMS",
    hospitalPrice: "Rs.45 + 12% GST",
    gstRate: "12%",
    kitContents: JSON.stringify([
      { no:1, item:"Disposable Bed Sheet", spec:"SMMS/SMS 35 GSM - 160 x 220 CMS" },
      { no:2, item:"Pillow Cover", spec:"55 x 70 CMS" }
    ])
  },
  {
    sku: "001008BLU",
    hospitalPrice: "Rs.38 + 12% GST",
    gstRate: "12%",
    kitContents: JSON.stringify([
      { no:1, item:"Disposable Bed Sheet - Blue", spec:"SMMS/SMS 25 GSM - 160 x 220 CMS" },
      { no:2, item:"Pillow Cover", spec:"55 x 70 CMS" }
    ])
  },
  {
    sku: "001008YEL",
    hospitalPrice: "Rs.38 + 12% GST",
    gstRate: "12%",
    kitContents: JSON.stringify([
      { no:1, item:"Disposable Bed Sheet - Yellow", spec:"SMMS/SMS 25 GSM - 160 x 220 CMS" },
      { no:2, item:"Pillow Cover", spec:"55 x 70 CMS" }
    ])
  },
  {
    sku: "001008PSB",
    hospitalPrice: "Rs.38 + 12% GST",
    gstRate: "12%",
    kitContents: JSON.stringify([
      { no:1, item:"Disposable Bed Sheet - PPSB", spec:"PPSB 35 GSM - 160 x 220 CMS" },
      { no:2, item:"Pillow Cover", spec:"55 x 70 CMS" }
    ])
  },
  {
    sku: "001007SMS",
    hospitalPrice: "Rs.22 + 12% GST",
    gstRate: "12%",
    kitContents: JSON.stringify([
      { no:1, item:"Examination Couch Sheet", spec:"SMMS/SMS 25 GSM / PPSB 30 GSM - 80 x 210 CMS" }
    ])
  },
  {
    sku: "001012SMF",
    kitContents: JSON.stringify([
      { no:1, item:"Covering Sheet - SMS", spec:"SMMS/SMS 35 GSM - 160 x 200 CMS" }
    ])
  }
]

async function main() {
  console.log('Starting product price and kit contents update...')
  
  let updatedCount = 0
  let skippedCount = 0

  for (const update of productUpdates) {
    try {
      const product = await prisma.product.findFirst({
        where: { sku: update.sku }
      })

      if (product) {
        await prisma.product.update({
          where: { id: product.id },
          data: {
            hospitalPrice: update.hospitalPrice || null,
            mrp: update.mrp || null,
            gstRate: update.gstRate || null,
            kitContents: update.kitContents
          }
        })
        console.log(`✅ Updated SKU: ${update.sku}`)
        updatedCount++
      } else {
        console.warn(`⚠️ Product not found for SKU: ${update.sku}`)
        skippedCount++
      }
    } catch (error) {
      console.error(`❌ Error updating SKU ${update.sku}:`, error)
    }
  }

  console.log('\nUpdate Summary:')
  console.log(`Total processed: ${productUpdates.length}`)
  console.log(`Successfully updated: ${updatedCount}`)
  console.log(`Skipped (not found): ${skippedCount}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
