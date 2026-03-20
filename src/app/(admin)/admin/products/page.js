import { getCategories, getProducts } from '@/lib/actions';
import AdminProductsClient from './Client';

export default async function AdminProductsPage() {
    const productsData = await getProducts();
    const categoriesData = await getCategories();
    return <AdminProductsClient productsData={productsData} categoriesData={categoriesData} />;
}

import { cn } from '@/lib/utils';
