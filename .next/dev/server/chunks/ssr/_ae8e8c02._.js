module.exports = [
"[project]/src/lib/db.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
;
const prismaClientSingleton = ()=>{
    return new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]();
};
const db = globalThis.prismaGlobal ?? prismaClientSingleton();
if ("TURBOPACK compile-time truthy", 1) globalThis.prismaGlobal = db;
}),
"[project]/src/lib/actions.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"001306d586ba277bf711fd3430eadf74c61b8142ab":"getBanners","005425da4bd57661644cb27525cd4248b9ea786478":"getProducts","008b5fd52888c040b10543da6e930f660cd3f314a6":"getStats","00a9e81ed99a24ae3444b4df8f739e0af86f1c8993":"getLeads","00f138983531c853cdacc5061b7b2401f63ab09c9b":"getCategories","4039f02b3b3e6266966365e66e6677087905552c0e":"submitLeads","4043a73085d321215884354ea55deda734393c36d9":"updateStats","40caf72f1ef02d0b2c3e78b9f91508f5bf8169f867":"updateProducts","40d43e87e2649925a28e35349b47382de9b67d2c6f":"updateBanners","40e8a16985deaadf3859b2438b252c667bd5b2d992":"updateCategories","60864846af01fe5bd73bec65192cd0f263a6e4171e":"updateLeadStatus"},"",""] */ __turbopack_context__.s([
    "getBanners",
    ()=>getBanners,
    "getCategories",
    ()=>getCategories,
    "getLeads",
    ()=>getLeads,
    "getProducts",
    ()=>getProducts,
    "getStats",
    ()=>getStats,
    "submitLeads",
    ()=>submitLeads,
    "updateBanners",
    ()=>updateBanners,
    "updateCategories",
    ()=>updateCategories,
    "updateLeadStatus",
    ()=>updateLeadStatus,
    "updateProducts",
    ()=>updateProducts,
    "updateStats",
    ()=>updateStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function getCategories() {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].category.findMany({
        orderBy: {
            name: 'asc'
        }
    });
}
async function getProducts() {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].product.findMany({
        include: {
            category: true
        },
        orderBy: {
            title: 'asc'
        }
    });
}
async function getBanners() {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].banner.findMany({
        where: {
            isActive: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
}
async function getStats() {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].stat.findMany({
        orderBy: {
            order: 'asc'
        }
    });
}
async function getLeads() {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].lead.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });
}
async function updateLeadStatus(id, status) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].lead.update({
            where: {
                id
            },
            data: {
                status
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin/leads');
        return {
            success: true
        };
    } catch (error) {
        console.error('Failed to update lead status:', error);
        return {
            success: false
        };
    }
}
async function updateBanners(banners) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].banner.deleteMany({});
        if (banners && banners.length > 0) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].banner.createMany({
                data: banners.map((b)=>({
                        title: b.title || '',
                        subtitle: b.subtitle || '',
                        image: b.image || '',
                        link: b.link || '/',
                        placement: b.placement || 'home',
                        isActive: b.isActive !== false
                    }))
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
        return {
            success: true
        };
    } catch (error) {
        console.error('Failed to update banners:', error);
        return {
            success: false,
            error: 'Failed to persist banner data to Database'
        };
    }
}
async function updateCategories(categories) {
    try {
        // Bulk upsert sequentially to ensure constraints
        for (const cat of categories){
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].category.upsert({
                where: {
                    slug: cat.id || cat.slug
                },
                update: {
                    name: cat.name,
                    description: cat.description || '',
                    image: cat.image || ''
                },
                create: {
                    slug: cat.id || cat.slug,
                    name: cat.name,
                    description: cat.description || '',
                    image: cat.image || ''
                }
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/products');
        return {
            success: true
        };
    } catch (error) {
        console.error('Failed to update categories:', error);
        return {
            success: false,
            error: 'Failed to persist category data to Database'
        };
    }
}
async function updateStats(stats) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].stat.deleteMany({});
        if (stats && stats.length > 0) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].stat.createMany({
                data: stats.map((s, idx)=>({
                        name: s.name,
                        value: s.value,
                        order: idx + 1
                    }))
            });
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
        return {
            success: true
        };
    } catch (error) {
        console.error('Failed to update stats:', error);
        return {
            success: false,
            error: 'Failed to persist stats data to Database'
        };
    }
}
async function updateProducts(products) {
    try {
        for (const prod of products){
            // Check if product exists physically
            const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].product.findFirst({
                where: {
                    OR: [
                        {
                            id: prod.id
                        },
                        {
                            title: prod.name
                        }
                    ]
                }
            });
            if (existing) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].product.update({
                    where: {
                        id: existing.id
                    },
                    data: {
                        title: prod.name || prod.title,
                        description: prod.description || existing.description,
                        image: prod.image || existing.image,
                        specs: {
                            material: prod.material,
                            size: prod.size,
                            sterilization: prod.sterilization,
                            moq: prod.moq,
                            features: prod.features
                        }
                    }
                });
            } else {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].product.create({
                    data: {
                        id: prod.id || undefined,
                        title: prod.name || prod.title,
                        description: prod.description || '',
                        image: prod.image || '',
                        price: null,
                        category: {
                            connect: {
                                slug: prod.category || prod.categoryId
                            }
                        },
                        specs: {
                            material: prod.material,
                            size: prod.size,
                            sterilization: prod.sterilization,
                            moq: prod.moq,
                            features: prod.features
                        }
                    }
                });
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/products');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/category/[id]');
        return {
            success: true
        };
    } catch (error) {
        console.error('Failed to update products:', error);
        return {
            success: false,
            error: 'Failed to persist product data to Database'
        };
    }
}
async function submitLeads(data) {
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].lead.create({
            data: {
                fullName: data.name || data.fullName,
                email: data.email,
                phone: data.phone,
                organization: data.hospital || data.organization,
                type: data.type || 'INQUIRY',
                specialty: data.specialty || '',
                volume: data.volume || '',
                message: data.message || '',
                items: data.items || [],
                status: 'new'
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin/leads');
        return {
            success: true
        };
    } catch (error) {
        console.error('Failed to submit lead:', error);
        throw new Error('Database submission failed');
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getCategories,
    getProducts,
    getBanners,
    getStats,
    getLeads,
    updateLeadStatus,
    updateBanners,
    updateCategories,
    updateStats,
    updateProducts,
    submitLeads
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCategories, "00f138983531c853cdacc5061b7b2401f63ab09c9b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProducts, "005425da4bd57661644cb27525cd4248b9ea786478", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBanners, "001306d586ba277bf711fd3430eadf74c61b8142ab", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getStats, "008b5fd52888c040b10543da6e930f660cd3f314a6", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getLeads, "00a9e81ed99a24ae3444b4df8f739e0af86f1c8993", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateLeadStatus, "60864846af01fe5bd73bec65192cd0f263a6e4171e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateBanners, "40d43e87e2649925a28e35349b47382de9b67d2c6f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCategories, "40e8a16985deaadf3859b2438b252c667bd5b2d992", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateStats, "4043a73085d321215884354ea55deda734393c36d9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProducts, "40caf72f1ef02d0b2c3e78b9f91508f5bf8169f867", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitLeads, "4039f02b3b3e6266966365e66e6677087905552c0e", null);
}),
"[project]/.next-internal/server/app/(frontend)/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/(frontend)/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "001306d586ba277bf711fd3430eadf74c61b8142ab",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBanners"],
    "005425da4bd57661644cb27525cd4248b9ea786478",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProducts"],
    "008b5fd52888c040b10543da6e930f660cd3f314a6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStats"],
    "00a9e81ed99a24ae3444b4df8f739e0af86f1c8993",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLeads"],
    "00f138983531c853cdacc5061b7b2401f63ab09c9b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCategories"],
    "4039f02b3b3e6266966365e66e6677087905552c0e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitLeads"],
    "4043a73085d321215884354ea55deda734393c36d9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateStats"],
    "40caf72f1ef02d0b2c3e78b9f91508f5bf8169f867",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProducts"],
    "40d43e87e2649925a28e35349b47382de9b67d2c6f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateBanners"],
    "40e8a16985deaadf3859b2438b252c667bd5b2d992",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCategories"],
    "60864846af01fe5bd73bec65192cd0f263a6e4171e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateLeadStatus"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$frontend$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(frontend)/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/actions.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_ae8e8c02._.js.map