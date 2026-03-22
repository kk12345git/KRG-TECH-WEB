import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const productUpdates = [
  {
    sku: "001039SMS",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Standard x5", spec:"SMMS 43 GSM — 160 x 135 CMS" },
      { no:2, item:"Hand Towel x5", spec:"Spun Lace 45 GSM — 32 x 32 CMS" },
      { no:3, item:"Large Sheet with Release x2", spec:"SMMS 50 GSM — 200 x 160 CMS" },
      { no:4, item:"Small Sheet with Absorbent x4", spec:"SMMS/Spun Lace 68 GSM — 100 x 80 CMS" },
      { no:5, item:"Mayo Stand Cover x1", spec:"PP+PE Laminated 40 GSM — 150 x 160 CMS" },
      { no:6, item:"Trolley Sheet x1", spec:"PP+PE Laminated 40 GSM — 120 x 160 CMS" },
      { no:7, item:"Cautry Bag x1", spec:"SMMS 43 GSM — 30 x 30 CMS" },
      { no:8, item:"Wrapper x1", spec:"SMMS 35 GSM — 80 x 100 CMS" }
    ])
  },
  {
    sku: "001039SAV",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Standard x3", spec:"SMMS 43 GSM — 160 x 135 CMS" },
      { no:2, item:"Hand Towel x3", spec:"Spun Lace 45 GSM — 32 x 32 CMS" },
      { no:3, item:"Large Sheet x2", spec:"SMMS 50 GSM — 200 x 160 CMS" },
      { no:4, item:"Small Sheet with Absorbent x4", spec:"SMMS/Spun Lace 68 GSM — 100 x 80 CMS" },
      { no:5, item:"Mayo Stand Cover x1", spec:"PP+PE Laminated 40 GSM — 150 x 160 CMS" },
      { no:6, item:"Trolley Sheet x1", spec:"PP+PE Laminated 40 GSM — 120 x 160 CMS" },
      { no:7, item:"Cautry Bag x1", spec:"SMMS 43 GSM — 30 x 30 CMS" },
      { no:8, item:"Wrapper x1", spec:"SMMS 35 GSM — 80 x 100 CMS" }
    ])
  },
  {
    sku: "001039CTN",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Standard x4", spec:"SMMS 43 GSM — 160 x 135 CMS" },
      { no:2, item:"Hand Towel x4", spec:"Spun Lace 45 GSM — 32 x 32 CMS" },
      { no:3, item:"Large Sheet Release x2", spec:"SMMS 43 GSM — 200 x 160 CMS" },
      { no:4, item:"Small Sheet with Absorbent x4", spec:"SMMS/Spun Lace 68 GSM — 100 x 80 CMS" },
      { no:5, item:"Mayo Stand Cover x1", spec:"PP+PE Laminated 40 GSM — 150 x 160 CMS" },
      { no:6, item:"Trolley Sheet x1", spec:"PP+PE Laminated 40 GSM — 120 x 160 CMS" },
      { no:7, item:"Cautry Bag x1", spec:"SMMS 43 GSM — 30 x 40 CMS" },
      { no:8, item:"Wrapper x1", spec:"SMMS 35 GSM — 80 x 100 CMS" }
    ])
  },
  {
    sku: "002002SRH",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Standard x3", spec:"SMMS 43 GSM — 160 x 135 CMS" },
      { no:2, item:"Hand Towel x3", spec:"Spun Lace 45 GSM — 32 x 32 CMS" },
      { no:3, item:"Large Sheet with Release x2", spec:"SMMS 43 GSM — 200 x 160 CMS" },
      { no:4, item:"Center Hole Sheet x1", spec:"SMMS 43 GSM — 160 x 200 CMS, Fenestration 20 x 25 CMS" },
      { no:5, item:"Small Sheet with Absorbent x4", spec:"SMMS/Spun Lace 68 GSM — 100 x 80 CMS, Absorbent patch 60 x 72 CMS" },
      { no:6, item:"Small Sheet Plain x1", spec:"SMMS 43 GSM — 100 x 80 CMS" },
      { no:7, item:"Trolley Sheet x1", spec:"PP+PE Laminated Sheet" },
      { no:8, item:"Wrapper x1", spec:"SMMS 35 GSM — 80 x 100 CMS" }
    ])
  },
  {
    sku: "003009FOR",
    kitContents: JSON.stringify([
      { no:1, item:"Reinforced Surgeon Gown x5", spec:"SMMS 43 GSM — 200 x 160 CMS, PE+PP Lamination on body and sleeves" },
      { no:2, item:"Hand Towel x5", spec:"Spun Lace 45 GSM — 32 x 32 CMS" },
      { no:3, item:"Wrapper x1", spec:"SMS 35 GSM — 80 x 100 CMS" },
      { no:4, item:"Ortho Drape x1", spec:"PP+PP Lamination 40 GSM — 200 x 160 CMS" },
      { no:5, item:"Large Sheet Release x6", spec:"SMMS 50 GSM — 200 x 160 CMS with Release Tape" },
      { no:6, item:"Large Sheet Plain x1", spec:"SMMS 50 GSM — 200 x 160 CMS" },
      { no:7, item:"60 inch Sheet x1", spec:"SMMS 43 GSM — 100 x 160 CMS" },
      { no:8, item:"Small Sheet with Absorbent x4", spec:"SMMS 43 / Spun Lace 68 GSM — 100 x 80 CMS, Absorbent patch 60 x 72 CMS" },
      { no:9, item:"Small Sheet Plain x2", spec:"SMMS 43 GSM — 100 x 80 CMS" },
      { no:10, item:"Trolley Sheet x1", spec:"PP+PE Laminated 40 GSM — 200 x 160 CMS" },
      { no:11, item:"Cautry Bag x1", spec:"SMMS 43 GSM — 30 x 40 CMS" },
      { no:12, item:"Wrapper x1", spec:"SMS 100 x 80 CMS" }
    ])
  },
  {
    sku: "003009DVK",
    kitContents: JSON.stringify([
      { no:1, item:"Reinforced Surgeon Gown x5", spec:"SMMS 43 GSM — 200 x 160 CMS, PE+PP Lamination patches" },
      { no:2, item:"Hand Towel x5", spec:"Spun Lace 45 GSM — 32 x 32 CMS" },
      { no:3, item:"Wrapper x1", spec:"SMS 35 GSM — 80 x 100 CMS" },
      { no:4, item:"Ortho Drape x1", spec:"PP+PP Lamination 40 GSM — 200 x 160 CMS" },
      { no:5, item:"Large Sheet x3", spec:"SMMS 50 GSM — 200 x 160 CMS" },
      { no:6, item:"60 inch Sheet x2", spec:"SMMS 43 GSM — 100 x 160 CMS" },
      { no:7, item:"Small Sheet with Absorbent x4", spec:"SMMS 43 / Spun Lace 68 GSM — 100 x 80 CMS" },
      { no:8, item:"Small Sheet Plain x4", spec:"SMMS 43 GSM — 100 x 80 CMS" },
      { no:9, item:"Trolley Sheet x1", spec:"PP+PE Laminated 40 GSM — 200 x 160 CMS" },
      { no:10, item:"Cautry Bag x1", spec:"SMMS 43 GSM — 30 x 40 CMS" },
      { no:11, item:"Wrapper x1", spec:"SMS 100 x 80 CMS" }
    ])
  },
  {
    sku: "003009SAI",
    kitContents: JSON.stringify([
      { no:1, item:"Reinforced Surgeon Gown x4", spec:"SMMS 43 GSM — 200 x 160 CMS, PE+PP Lamination patches" },
      { no:2, item:"Hand Towel x4", spec:"Spun Lace 45 GSM — 32 x 32 CMS" },
      { no:3, item:"Ortho Drape x1", spec:"PP+PP Lamination 40 GSM — 200 x 160 CMS" },
      { no:4, item:"Large Sheet x4", spec:"SMMS 50 GSM — 200 x 160 CMS" },
      { no:5, item:"60 inch Sheet x2", spec:"SMMS 43 GSM — 100 x 160 CMS" },
      { no:6, item:"Small Sheet Plain x6", spec:"SMMS 43 GSM — 100 x 80 CMS" },
      { no:7, item:"Trolley Sheet x1", spec:"PP+PE Laminated 40 GSM — 200 x 160 CMS" },
      { no:8, item:"Cautry Bag x1", spec:"SMMS 43 GSM — 30 x 30 CMS" },
      { no:9, item:"Wrapper x1", spec:"SMS 100 x 80 CMS" }
    ])
  },
  {
    sku: "003009NAH",
    kitContents: JSON.stringify([
      { no:1, item:"Reinforced Surgeon Gown x3", spec:"SMMS 43 GSM — 200 x 160 CMS, PE+PP Lamination patches" },
      { no:2, item:"Hand Towel x3", spec:"Spun Lace 45 GSM — 32 x 32 CMS" },
      { no:3, item:"Ortho Drape x1", spec:"PP+PP Lamination 40 GSM — 200 x 160 CMS with Release Tape" },
      { no:4, item:"Large Sheet x1", spec:"SMMS 43 GSM — 200 x 160 CMS" },
      { no:5, item:"60 inch Sheet x1", spec:"SMMS 43 GSM — 100 x 160 CMS" },
      { no:6, item:"Medium Sheet with Absorbent x4", spec:"SMMS 43 / Spun Lace 68 GSM — 100 x 80 CMS" },
      { no:7, item:"Medium Sheet Plain x2", spec:"SMMS 43 GSM — 100 x 80 CMS" },
      { no:8, item:"Trolley Sheet x1", spec:"PP+PE Laminated 40 GSM — 200 x 160 CMS" },
      { no:9, item:"Cautry Bag x1", spec:"SMMS 43 GSM — 30 x 30 CMS" },
      { no:10, item:"Wrapper x2", spec:"SMMS 35 GSM — 80 x 100 CMS" }
    ])
  },
  {
    sku: "003009SUG",
    kitContents: JSON.stringify([
      { no:1, item:"Reinforced Surgeon Gown x4", spec:"SMMS 43 GSM — 200 x 160 CMS, PE+PP Lamination patches" },
      { no:2, item:"Hand Towel x4", spec:"Spun Lace 45 GSM — 32 x 32 CMS" },
      { no:3, item:"Ortho Drape x1", spec:"PP+PP Lamination 40 GSM — 200 x 160 CMS" },
      { no:4, item:"Large Sheet x4", spec:"SMMS 50 GSM — 200 x 160 CMS" },
      { no:5, item:"60 inch Sheet x2", spec:"SMMS 43 GSM — 100 x 160 CMS" },
      { no:6, item:"Small Sheet with Absorbent x4", spec:"SMMS 43 / Spun Lace 68 GSM — 100 x 80 CMS" },
      { no:7, item:"Small Sheet Plain x2", spec:"SMMS 43 GSM — 100 x 80 CMS" },
      { no:8, item:"Trolley Sheet x1", spec:"PP+PE Laminated 40 GSM — 200 x 160 CMS" },
      { no:9, item:"Cautry Bag x1", spec:"SMMS 43 GSM — 30 x 30 CMS" },
      { no:10, item:"Wrapper x2", spec:"SMMS 35 GSM — 80 x 100 CMS" }
    ])
  },
  {
    sku: "5007PMS",
    kitContents: JSON.stringify([
      { no:1, item:"Reinforced Surgeon Gown x5", spec:"SMMS 43 GSM — 197 x 160 CMS, PE+PP Lamination patches" },
      { no:2, item:"Hand Towel x10", spec:"Spun Lace 45 GSM — 32 x 32 CMS" },
      { no:3, item:"Cautry Bag x2", spec:"SMMS 43 GSM — 30 x 30 CMS" },
      { no:4, item:"Mayo Stand Cover x1", spec:"PP+PE Laminated 40 GSM — 150 x 160 CMS" },
      { no:5, item:"Mayo Stand Cover Sheet Form x1", spec:"PP+PE Laminated 40 GSM — 100 x 160 CMS" },
      { no:6, item:"Basin Sheet x2", spec:"SMMS 43 GSM — 130 x 160 CMS" },
      { no:7, item:"Large Sheet RFD x1", spec:"PP+PE Laminated 60 GSM — 160 x 160 CMS" },
      { no:8, item:"Trolley Sheet x1", spec:"PP+PE Laminated 40 GSM — 220 x 160 CMS" },
      { no:9, item:"Rolling Sheet x1", spec:"SMMS 43 GSM — 45 x 75 CMS" },
      { no:10, item:"Screen Sheet with Release + Absorbant Patch x1", spec:"SMMS 43 GSM — 220 x 160 CMS, Spun Lace 70 GSM patch 60 x 72.5 CMS" },
      { no:11, item:"Side Sheet Absorbant x2", spec:"100% Spun Lace Laminated 73 GSM — 100 x 80 CMS" },
      { no:12, item:"Triangle Sheet x2", spec:"SMMS 43 GSM — 80 x 80 CMS" },
      { no:13, item:"Abdominal Sheet x1", spec:"SMMS 43 GSM — 160 x 160 CMS" },
      { no:14, item:"Papper Sheet x1", spec:"Spun Lace Lamination 73 GSM — 100 x 72.5 CMS" },
      { no:15, item:"Groin Sheet x1", spec:"SMMS 43 GSM" },
      { no:16, item:"Long Sheet x1", spec:"SMMS 43 GSM" },
      { no:17, item:"Side Sheet Plain x1", spec:"SMMS 43 GSM" },
      { no:18, item:"Wrapper x1", spec:"SMMS 35 GSM" }
    ])
  },
  {
    sku: "5007VMC",
    kitContents: JSON.stringify([
      { no:1, item:"Reinforced Surgeon Gown x5", spec:"SMMS 43 GSM — 197 x 160 CMS, 60 GSM Microporous Lamination patches" },
      { no:2, item:"Hand Towel x5", spec:"Spun Lace 45 GSM — 32 x 32 CMS" },
      { no:3, item:"Long Sheet x5", spec:"SMMS 50 GSM — 250 x 160 CMS + 2 inch Release Tape on 2m side" },
      { no:4, item:"Medium Sheet with Absorbant Patch x4", spec:"SMMS 50 GSM — 100 x 100 CMS + Spun Lace 68 GSM + 1.5 inch Release Tape" },
      { no:5, item:"Medium Sheet Plain x4", spec:"SMMS 50 GSM — 100 x 100 CMS" },
      { no:6, item:"Groin Sheet with Release Tape x2", spec:"SMMS 50 GSM — 51 x 34 CMS, Release Tape on 34 CMS side" },
      { no:7, item:"Trolley Sheet Large x1", spec:"PP+PE Laminated 60 GSM — 240 x 240 CMS" },
      { no:8, item:"Trolley Sheet x2", spec:"PP+PE Laminated 60 GSM — 200 x 160 CMS" },
      { no:9, item:"Trolley Sheet Medium x1", spec:"PP+PE Laminated 60 GSM — 150 x 160 CMS" },
      { no:10, item:"Cautry Bag x5", spec:"Bag 45 x 30 CMS with 2 Release Tapes" },
      { no:11, item:"Wrapper x1", spec:"SMMS 35 GSM — 100 x 80 CMS" }
    ])
  },
  {
    sku: "002014SKS",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Standard x3", spec:"SMMS 43 GSM — 160 x 135 CMS" },
      { no:2, item:"Hand Towel x3", spec:"Spun Lace 40 GSM — 40 x 40 CMS" },
      { no:3, item:"Center Hole Sheet x2", spec:"SMMS 43 GSM — 100 x 60 CMS" },
      { no:4, item:"Large Sheet x2", spec:"SMMS 43 GSM — 200 x 160 CMS" },
      { no:5, item:"Trolley Sheet x1", spec:"PP+PE Laminated 40 GSM — 100 x 80 CMS" },
      { no:6, item:"Small Sheet Plain x1", spec:"SMMS 43 GSM — 100 x 80 CMS" },
      { no:7, item:"Small Sheet Plain Release x1", spec:"SMMS 43 GSM — 100 x 160 CMS" },
      { no:8, item:"Leggings Pair x1", spec:"SMMS 43 GSM — 100 x 80 CMS" },
      { no:9, item:"Wrapper x1", spec:"SMMS 35 GSM — 100 x 160 CMS" },
      { no:10, item:"Plain Sheet Release x1", spec:"SMMS 43 GSM — 100 x 160 CMS" }
    ])
  },
  {
    sku: "002014PNG",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Standard x4", spec:"SMMS 43 GSM — 160 x 135 CMS" },
      { no:2, item:"Hand Towel x4", spec:"Spun Lace 40 GSM — 40 x 40 CMS" },
      { no:3, item:"Medium Sheet with Absorbant x1", spec:"SMMS 43 GSM — 100 x 80 CMS, Spun Lace Absorbant patched" },
      { no:4, item:"Large Sheet with Release x3", spec:"SMMS 43 GSM — 200 x 160 CMS + Release Tape" },
      { no:5, item:"Medium Sheet with Release Tape x2", spec:"SMMS 43 GSM — 100 x 80 CMS" },
      { no:6, item:"Leggings Pair x1", spec:"SMMS 43 GSM — 100 x 80 CMS" },
      { no:7, item:"Center Hole Sheet with Adhesive Tape x1", spec:"SMMS 43 GSM — 120 x 160 CMS" },
      { no:8, item:"60 inch Sheet x1", spec:"SMMS 43 GSM — 100 x 160 CMS" },
      { no:9, item:"Trolley Sheet x1", spec:"PP+PE Laminated 40 GSM — 200 x 160 CMS" },
      { no:10, item:"Kit Wrapper x1", spec:"SMS 35 GSM — 100 x 80 CMS" }
    ])
  },
  {
    sku: "002012SAI",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Standard x4", spec:"SMMS 43 GSM — 160 x 135 CMS" },
      { no:2, item:"Hand Towel x4", spec:"Spun Lace 45 GSM — 32 x 32 CMS" },
      { no:3, item:"Center Hole Sheet with Fluid Pouch x1", spec:"SMMS 200 x 160 CMS + Spun Lace 68 GSM Absorbant + Fluid Collection Pouch" },
      { no:4, item:"Large Sheet with Release x1", spec:"SMMS 43 GSM — 200 x 160 CMS" },
      { no:5, item:"Small Sheet with Absorbant x3", spec:"SMMS 43 GSM — 100 x 80 CMS + Absorbant Patch (Spun Lace 60 x 53 CMS)" },
      { no:6, item:"Hip Legging Pair x1", spec:"SMMS 43 GSM — 120 x 140 CMS" },
      { no:7, item:"Cautry Bag x1", spec:"SMMS 43 GSM — 30 x 30 CMS" },
      { no:8, item:"Trolley Sheet x1", spec:"PP+PE Laminated — 120 x 160 CMS" },
      { no:9, item:"Wrapper x1", spec:"SMS 35 GSM — 100 x 80 CMS" }
    ])
  },
  {
    sku: "003003PMR",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Reinforced x4", spec:"SMMS 43 GSM — 160 x 135 CMS" },
      { no:2, item:"Hand Towel x4", spec:"Spun Lace 45 GSM — 32 x 32 CMS" },
      { no:3, item:"Wrapper x1", spec:"SMMS 35 GSM — 100 x 80 CMS" },
      { no:4, item:"Knee O Drape x1", spec:"SMMS 50 GSM — 320 x 240 CMS, 2-side Release Tape, 1.5 sq.mtr 70 GSM Spun Lace Absorbant on rubber aperture, PE+PP Laminated reinforced" },
      { no:5, item:"Large Sheet Release x2", spec:"SMMS 43 GSM — 200 x 160 CMS" },
      { no:6, item:"Small Sheet with Absorbent x2", spec:"SMMS/Spun Lace 68 GSM — 100 x 80 CMS" },
      { no:7, item:"Trolley Sheet x4", spec:"PP+PE Laminated 40 GSM — 200 x 160 CMS" }
    ])
  },
  {
    sku: "003001PRM",
    kitContents: JSON.stringify([
      { no:1, item:"Knee O Drape PRM x1", spec:"SPL Laminated material, PE + Absorbant Spun Lace (Ginni Filament), 50 GSM SMS Fabric + rubber aperture for fenestration" },
      { no:2, item:"Extremity Cover x1", spec:"Cling Wrap for limb coverage" },
      { no:3, item:"Cautry Bag x1", spec:"SMMS 43 GSM" },
      { no:4, item:"Wrapper x1", spec:"SMMS 35 GSM" }
    ])
  },
  {
    sku: "003004PRM",
    kitContents: JSON.stringify([
      { no:1, item:"U Drape x1", spec:"SMMS 50 GSM — 340 x 240 CMS, bottom reinforced PP+PE 60 GSM, U fenestration with Release Tape" },
      { no:2, item:"Large Sheet x1", spec:"SMMS 43 GSM — 200 x 160 CMS" },
      { no:3, item:"Small Sheet with Absorbent x1", spec:"SMMS/Spun Lace 68 GSM — 100 x 80 CMS, Absorbent patch 60 x 72 CMS" },
      { no:4, item:"Cautry Bag x1", spec:"SMMS 43 GSM — 30 x 30 CMS" },
      { no:5, item:"Wrapper x1", spec:"SMMS 35 GSM — 100 x 80 CMS" }
    ])
  },
  {
    sku: "003005PRM",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Reinforced x4", spec:"SMMS 43 GSM — 160 x 135 CMS" },
      { no:2, item:"Hand Towel x4", spec:"Spun Lace 45 GSM — 32 x 32 CMS" },
      { no:3, item:"Wrapper x1", spec:"SMMS 35 GSM — 100 x 80 CMS" },
      { no:4, item:"U Drape x1", spec:"SMMS 50 GSM — 340 x 240 CMS, PP+PE 60 GSM reinforced, Release Tape on U fenestration" },
      { no:5, item:"Large Sheet Release x2", spec:"SMMS 43 GSM — 200 x 160 CMS" },
      { no:6, item:"Small Sheet with Absorbent x4", spec:"SMMS/Spun Lace 68 GSM — 100 x 80 CMS" },
      { no:7, item:"Trolley Sheet x4", spec:"PP+PE Laminated 40 GSM — 200 x 160 CMS" }
    ])
  },
  {
    sku: "003011CTN",
    kitContents: JSON.stringify([
      { no:1, item:"Knee Arthroscopy Drape x1", spec:"With liquid collection pouch + 2 leg hole apertures" },
      { no:2, item:"Cling Wrap x1", spec:"For covering extremity area" },
      { no:3, item:"Cautry Bag x1", spec:"SMMS 43 GSM" },
      { no:4, item:"Wrapper x1", spec:"SMMS 35 GSM" }
    ])
  },
  {
    sku: "003012CTN",
    kitContents: JSON.stringify([
      { no:1, item:"Hand O Drape x1", spec:"O Drape for Shoulder Arthroscopy — 160 x 160 CMS" },
      { no:2, item:"Shoulder U Drape x2", spec:"U Drape for Shoulder Arthroscopy — 160 x 200 CMS (Upper or Lower)" },
      { no:3, item:"Large Sheet x2", spec:"SMMS 43 GSM — 200 x 160 CMS + Adhesive" },
      { no:4, item:"Medium Sheet with ABS x2", spec:"SMMS 43 GSM — 100 x 80 CMS, 60 x 72 CMS Absorbant attached" },
      { no:5, item:"Medium Sheet Plain x2", spec:"SMMS 35 GSM — 100 x 80 CMS" },
      { no:6, item:"Trolley Sheet x1", spec:"PP+PE Laminated 40 GSM — 200 x 160 CMS" },
      { no:7, item:"Cling Wrap x1", spec:"For covering extremity area" },
      { no:8, item:"Wrapper x1", spec:"SMMS 35 GSM — 100 x 80 CMS" }
    ])
  },
  {
    sku: "004001GEN",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Standard x2", spec:"SMMS 43 GSM — 135 x 160 CMS" },
      { no:2, item:"Hand Towel x2", spec:"Spun Lace 40 GSM — 32 x 32 CMS" },
      { no:3, item:"Center Hole Sheet Plain x1", spec:"SMMS 43 GSM — 200 x 160 CMS" },
      { no:4, item:"Large Sheet Release with ABS x2", spec:"SMMS 43 GSM — 200 x 160 CMS" },
      { no:5, item:"Small Sheet with ABS x2", spec:"SMMS 43 GSM — 100 x 80 CMS" },
      { no:6, item:"Leggings Pair x1", spec:"SMMS 43 GSM — 100 x 80 CMS" },
      { no:7, item:"Cautry Bag x2", spec:"SMMS 43 GSM — 30 x 30 CMS" },
      { no:8, item:"Wrapper x1", spec:"SMMS 35 GSM — 100 x 80 CMS" }
    ])
  },
  {
    sku: "006006AHC",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Standard x3", spec:"SMMS 43 GSM — 160 x 135 CMS" },
      { no:2, item:"Hand Towel x3", spec:"Spun Lace 45 GSM — 32 x 32 CMS" },
      { no:3, item:"Large Sheet x2", spec:"SMMS 50 GSM — 200 x 160 CMS" },
      { no:4, item:"Center Hole Sheet x1", spec:"SMMS 50 GSM" },
      { no:5, item:"Small Sheet with Absorbent x4", spec:"SMMS/Spun Lace 68 GSM — 100 x 80 CMS, Absorbent patch 60 x 72 CMS" },
      { no:6, item:"Small Sheet Plain x1", spec:"SMMS 43 GSM — 100 x 80 CMS" },
      { no:7, item:"Trolley Sheet x1", spec:"PP+PE Laminated Sheet" }
    ])
  },
  {
    sku: "005005VJO",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Reinforced x2", spec:"SMMS 43 GSM — 160 x 200 CMS, PP+PE Lamination patch" },
      { no:2, item:"Hand Towel x2", spec:"Spun Lace 45 GSM — 32 x 32 CMS" },
      { no:3, item:"Angio Drape x1", spec:"PP+PE Laminated 60 GSM — 350 x 160 CMS" },
      { no:4, item:"Release Strips x2", spec:"SMS Adhesive Strips — 30 x 30 CMS" },
      { no:5, item:"Wrapper cum Trolley Sheet x1", spec:"PP+PE Laminated 40 GSM — 160 x 200 CMS" }
    ])
  },
  {
    sku: "002007GEN",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Standard x1", spec:"SMMS 43 GSM — 160 x 135 CMS" },
      { no:2, item:"Hand Towel x1", spec:"Spun Lace 45 GSM — 32 x 32 CMS" },
      { no:3, item:"Center Hole Sheet x1", spec:"SMMS 43 GSM — 100 x 160 CMS" },
      { no:4, item:"Leggings Pair x1", spec:"SMMS 43 GSM — 120 x 140 CMS" },
      { no:5, item:"Wrapper x1", spec:"SMMS 43 GSM — 100 x 80 CMS" }
    ])
  },
  {
    sku: "002009GEN",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Standard x2", spec:"SMMS 43 GSM — 160 x 135 CMS" },
      { no:2, item:"Hand Towel x2", spec:"Spun Lace 45 GSM — 32 x 32 CMS" },
      { no:3, item:"Center Hole Sheet x1", spec:"SMMS 43 GSM — 120 x 160 CMS" },
      { no:4, item:"Trolley Sheet x1", spec:"PP+PE Laminated 40 GSM — 120 x 160 CMS" },
      { no:5, item:"Small Sheet with Release x4", spec:"SMMS 43 GSM — 100 x 80 CMS" },
      { no:6, item:"Cautry Bag x1", spec:"SMMS 43 GSM — 30 x 30 CMS" },
      { no:7, item:"Wrapper x1", spec:"SMMS 35 GSM — 100 x 80 CMS" }
    ])
  },
  {
    sku: "002013ARC",
    kitContents: JSON.stringify([
      { no:1, item:"Large Sheet x1", spec:"SMMS 43 GSM — 200 x 160 CMS" },
      { no:2, item:"Leggings Pair x1", spec:"SMMS 43 GSM — 120 x 140 CMS" },
      { no:3, item:"Center Hole Sheet x1", spec:"SMMS 43 GSM — 80 x 160 CMS" },
      { no:4, item:"Wrapper x1", spec:"SMMS 35 GSM — 100 x 80 CMS" }
    ])
  },
  {
    sku: "002006JYM",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Standard x2", spec:"SMMS 43 GSM — 160 x 135 CMS" },
      { no:2, item:"Hand Towel x2", spec:"Spun Lace 40 GSM — 32 x 32 CMS" },
      { no:3, item:"Center Hole Sheet x1", spec:"SMMS 43 GSM — 120 x 160 CMS" },
      { no:4, item:"Leggings Pair x1", spec:"SMMS 43 GSM — 120 x 140 CMS" },
      { no:5, item:"Small Sheet with Absorbent x3", spec:"SMMS 35 GSM — 100 x 80 CMS, Absorbent patch 60 x 72 CMS" },
      { no:6, item:"Wrapper x1", spec:"SMMS 35 GSM" }
    ])
  },
  {
    sku: "002004NFU",
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
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Standard x1", spec:"SMMS 43 GSM — 160 x 135 CMS" },
      { no:2, item:"Hand Towel x1", spec:"Spun Lace 45 GSM — 32 x 32 CMS" },
      { no:3, item:"Center Hole Sheet x1", spec:"SMMS 43 GSM — 120 x 160 CMS" },
      { no:4, item:"Maternity Mat x1", spec:"Underpad with fluid collection pack" },
      { no:5, item:"Leggings Pair x1", spec:"SMMS 43 GSM — 120 x 140 CMS" },
      { no:6, item:"Small Sheet Plain x1", spec:"SMMS 43 GSM — 100 x 160 CMS" },
      { no:7, item:"Small Sheet Laminated x1", spec:"PP+PE Laminated 40 GSM — 100 x 75 CMS" },
      { no:8, item:"Cleaning Wipes x1", spec:"Spun Lace 40 GSM — 60 x 60 CMS" },
      { no:9, item:"Wrapper x1", spec:"SMMS 35 GSM" }
    ])
  },
  {
    sku: "002005SMP",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Standard x3", spec:"SMMS 43 GSM — 160 x 135 CMS" },
      { no:2, item:"Hand Towel x3", spec:"Spun Lace 40 GSM — 40 x 40 CMS" },
      { no:3, item:"Center Hole Sheet with ABS x1", spec:"SMMS 43 GSM — 160 x 200 CMS, Release Tape + Absorbant Patch" },
      { no:4, item:"Trolley Sheet x1", spec:"PP+PE Laminated 40 GSM — 120 x 160 CMS" },
      { no:5, item:"Small Sheet with Release x1", spec:"SMMS 43 GSM — 100 x 80 CMS" },
      { no:6, item:"Leggings Pair x1", spec:"SMMS 43 GSM — 120 x 140 CMS" },
      { no:7, item:"Large Sheet Release x1", spec:"SMMS 43 GSM — 200 x 160 CMS" },
      { no:8, item:"Wrapper x1", spec:"SMMS 35 GSM — 100 x 80 CMS" }
    ])
  },
  {
    sku: "0010037SKS",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Wrap Around Reinforced x4", spec:"SMMS 43 GSM — 160 x 135 CMS" },
      { no:2, item:"Hand Towel x4", spec:"Spun Lace 45 GSM — 32 x 32 CMS" },
      { no:3, item:"Large Sheet with Release x8", spec:"SMMS 50 GSM — 220 x 160 CMS" },
      { no:4, item:"Trolley Sheet x1", spec:"PP+PE Laminated 60 GSM" },
      { no:5, item:"Wrapper x2", spec:"SMMS 35 GSM — 100 x 80 CMS" }
    ])
  },
  {
    sku: "001037KAU",
    kitContents: JSON.stringify([
      { no:1, item:"Reinforced Surgeon Gown x3", spec:"SMMS 43 GSM — 197 x 160 CMS, PE+PP Lamination patches" },
      { no:2, item:"Hand Towel x3", spec:"Spun Lace 40 GSM — 32 x 32 CMS" },
      { no:3, item:"Wrapper x1", spec:"SMMS 35 GSM — 80 x 100 CMS" },
      { no:4, item:"Large Sheet Release x3", spec:"SMMS 43 GSM — 200 x 160 CMS" },
      { no:5, item:"Small Sheet with Absorbent x4", spec:"SMMS/Spun Lace 68 GSM — 100 x 80 CMS" },
      { no:6, item:"Trolley Sheet x1", spec:"PP+PE Laminated 40 GSM — 200 x 80 CMS" },
      { no:7, item:"Boot Cover Pair x3", spec:"Sewn from PP+PE Laminated Sheet" },
      { no:8, item:"Goggles x3", spec:"Protective surgical eye goggles" },
      { no:9, item:"Surgical Gloves Pair x3", spec:"Sterile" },
      { no:10, item:"Face Mask x3", spec:"3-ply surgical" },
      { no:11, item:"Tudaug Cap x3", spec:"Disposable turban cap" }
    ])
  },
  // SURGEON GOWNS
  {
    sku: "001003STD",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Standard", spec:"SMMS 43 GSM — 135 x 160 CMS, EO Sterile, HSN: 62101000" }
    ])
  },
  {
    sku: "001003XXL",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Wraparound", spec:"SMMS 43 GSM — 160 x 200 CMS, EO Sterile" }
    ])
  },
  {
    sku: "001003RFD",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Wraparound & Reinforced", spec:"SMMS 43 GSM — 160 x 200 CMS, EO Sterile" }
    ])
  },
  {
    sku: "001003SFD",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Standard / Reinforced", spec:"SMMS 43 GSM — 135 x 160 CMS, EO Sterile" }
    ])
  },
  {
    sku: "001003WFD",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Wraparound Body Reinforced", spec:"SMMS 43 GSM — 160 x 200 CMS, EO Sterile" }
    ])
  },
  {
    sku: "001003BFD",
    kitContents: JSON.stringify([
      { no:1, item:"Surgeon Gown Standard / Body Reinforced", spec:"SMMS 43 GSM — 135 x 160 CMS, EO Sterile" }
    ])
  },
  // PATIENT GOWNS
  {
    sku: "001002GEN",
    kitContents: JSON.stringify([
      { no:1, item:"Patient Gown Standard", spec:"SMMS 35 GSM — 160 x 120 CMS, Non-Sterile" }
    ])
  },
  {
    sku: "001002FSL",
    kitContents: JSON.stringify([
      { no:1, item:"Patient Gown Full Sleeve", spec:"SMMS 43 GSM — 160 x 125 CMS, Non-Sterile" }
    ])
  },
  {
    sku: "001002SLS",
    kitContents: JSON.stringify([
      { no:1, item:"Patient Gown Sleeveless", spec:"SMMS 43 GSM — 160 x 130 CMS, Non-Sterile" }
    ])
  },
  {
    sku: "001003PSB",
    kitContents: JSON.stringify([
      { no:1, item:"Isolation Gown", spec:"PPSB 43 GSM — 160 x 135 CMS, Non-Sterile" }
    ])
  },
  // PATIENT KITS
  {
    sku: "001001GNA",
    kitContents: JSON.stringify([
      { no:1, item:"Patient Gown Half Sleeve x1", spec:"SMMS Fabric" },
      { no:2, item:"Bouffant Cap x1", spec:"Disposable" },
      { no:3, item:"Shoe Cover x1", spec:"Disposable" },
      { no:4, item:"Drape Sheet x1", spec:"SMMS Fabric" }
    ])
  },
  {
    sku: "001001GNB",
    kitContents: JSON.stringify([
      { no:1, item:"Patient Gown Half Sleeve x1", spec:"SMMS Fabric" },
      { no:2, item:"Bouffant Cap x1", spec:"Disposable" },
      { no:3, item:"Shoe Cover x1", spec:"Disposable" }
    ])
  },
  {
    sku: "001001GNC",
    kitContents: JSON.stringify([
      { no:1, item:"Patient Gown Sleeveless x1", spec:"SMMS Fabric" },
      { no:2, item:"Bouffant Cap x1", spec:"Disposable" },
      { no:3, item:"Shoe Cover x1", spec:"Disposable" }
    ])
  },
  {
    sku: "001001GND",
    kitContents: JSON.stringify([
      { no:1, item:"Patient Gown Half Sleeve x1", spec:"SMMS Fabric" },
      { no:2, item:"Bouffant Cap x1", spec:"Disposable" },
      { no:3, item:"Shoe Cover x1", spec:"Disposable" }
    ])
  },
  // BED SHEETS
  {
    sku: "001008SMS",
    kitContents: JSON.stringify([
      { no:1, item:"Disposable Bed Sheet", spec:"SMMS/SMS 35 GSM — 160 x 220 CMS" },
      { no:2, item:"Pillow Cover", spec:"55 x 70 CMS" }
    ])
  },
  {
    sku: "001008BLU",
    kitContents: JSON.stringify([
      { no:1, item:"Disposable Bed Sheet - Blue", spec:"SMMS/SMS 25 GSM — 160 x 220 CMS" },
      { no:2, item:"Pillow Cover", spec:"55 x 70 CMS" }
    ])
  },
  {
    sku: "001008YEL",
    kitContents: JSON.stringify([
      { no:1, item:"Disposable Bed Sheet - Yellow", spec:"SMMS/SMS 25 GSM — 160 x 220 CMS" },
      { no:2, item:"Pillow Cover", spec:"55 x 70 CMS" }
    ])
  },
  {
    sku: "001008PSB",
    kitContents: JSON.stringify([
      { no:1, item:"Disposable Bed Sheet - PPSB", spec:"PPSB 35 GSM — 160 x 220 CMS" },
      { no:2, item:"Pillow Cover", spec:"55 x 70 CMS" }
    ])
  },
  {
    sku: "001007SMS",
    kitContents: JSON.stringify([
      { no:1, item:"Examination Couch Sheet", spec:"SMMS/SMS 25 GSM / PPSB 30 GSM — 80 x 210 CMS" }
    ])
  },
  {
    sku: "001012SMF",
    kitContents: JSON.stringify([
      { no:1, item:"Covering Sheet", spec:"SMMS/SMS 35 GSM — 160 x 200 CMS" }
    ])
  }
]

async function main() {
  console.log(`\n🚀 Starting kit contents update for ${productUpdates.length} products...\n`)
  let updated = 0
  let notFound = 0

  for (const p of productUpdates) {
    const result = await prisma.product.updateMany({
      where: { sku: p.sku },
      data: { kitContents: p.kitContents }
    })
    if (result.count > 0) {
      console.log(`✅ Updated: ${p.sku}`)
      updated++
    } else {
      console.log(`⚠️  Not found: ${p.sku}`)
      notFound++
    }
  }

  console.log(`\n📊 Summary: ${updated} updated, ${notFound} not found`)
  await prisma.$disconnect()
}

main().catch((e) => {
  console.error(e)
  prisma.$disconnect()
  process.exit(1)
})
