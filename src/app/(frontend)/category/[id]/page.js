import { getCategories, getProducts } from '@/lib/actions';
import CategoryClient from './Client';

export default async function CategoryPage({ params }) {
    const productsData = await getProducts();
    const categoriesData = await getCategories();
    return <CategoryClient categoryId={params.id} productsData={productsData} categoriesData={categoriesData} />;
}
