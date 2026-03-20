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

/* __next_internal_action_entry_do_not_use__ [{"0000007e0d5ee2217a8054ef16455a985f501333ed":"getStats","002c743c5ee7fe571d9c75c0b126c034972e469642":"getBanners","00a8c7bfb4cbd9e8e0f389b1e0e0275bad47ea4c25":"getProducts","00d36aadae6ea1905226914f3ba0efc0b131dce720":"getCategories","400e5c7ac1696140c025ddac9b74ef67a7a15d4898":"updateStats","404fd345e08590183827b68cf839dc9ae6e6f110b3":"submitLeads","408560ca0546529861df24a18b17f6d6b68c4859f0":"updateBanners","4085850c1efb3f697d5b6a7792bfe662c95e2f61f8":"updateProducts","40ee45fd6e0dbd8ad34a18c0b271f67b2e3bf0a327":"updateCategories"},"",""] */ __turbopack_context__.s([
    "getBanners",
    ()=>getBanners,
    "getCategories",
    ()=>getCategories,
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
                name: data.name,
                email: data.email,
                phone: data.phone,
                type: data.type || 'INQUIRY',
                metadata: {
                    hospital: data.hospital,
                    message: data.message,
                    items: data.items // Store selected items in metadata for now
                }
            }
        });
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
    updateBanners,
    updateCategories,
    updateStats,
    updateProducts,
    submitLeads
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCategories, "00d36aadae6ea1905226914f3ba0efc0b131dce720", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProducts, "00a8c7bfb4cbd9e8e0f389b1e0e0275bad47ea4c25", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBanners, "002c743c5ee7fe571d9c75c0b126c034972e469642", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getStats, "0000007e0d5ee2217a8054ef16455a985f501333ed", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateBanners, "408560ca0546529861df24a18b17f6d6b68c4859f0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCategories, "40ee45fd6e0dbd8ad34a18c0b271f67b2e3bf0a327", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateStats, "400e5c7ac1696140c025ddac9b74ef67a7a15d4898", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProducts, "4085850c1efb3f697d5b6a7792bfe662c95e2f61f8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitLeads, "404fd345e08590183827b68cf839dc9ae6e6f110b3", null);
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
}),
"[project]/.next-internal/server/app/(frontend)/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions.js [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0000007e0d5ee2217a8054ef16455a985f501333ed",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStats"],
    "002c743c5ee7fe571d9c75c0b126c034972e469642",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBanners"],
    "00a8c7bfb4cbd9e8e0f389b1e0e0275bad47ea4c25",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProducts"],
    "00d36aadae6ea1905226914f3ba0efc0b131dce720",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCategories"],
    "400e5c7ac1696140c025ddac9b74ef67a7a15d4898",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateStats"],
    "404fd345e08590183827b68cf839dc9ae6e6f110b3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitLeads"],
    "408560ca0546529861df24a18b17f6d6b68c4859f0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateBanners"],
    "4085850c1efb3f697d5b6a7792bfe662c95e2f61f8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProducts"],
    "40ee45fd6e0dbd8ad34a18c0b271f67b2e3bf0a327",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCategories"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$frontend$292f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(frontend)/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/actions.js [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_ae8e8c02._.js.map