import { getCategories, getProducts } from '@/lib/actions';
import CategoryClient from './Client';

export default async function CategoryPage({ params }) {
    const { id } = await params;
    const productsData = await getProducts();
    const categoriesData = await getCategories();
    return <CategoryClient categoryId={id} productsData={productsData} categoriesData={categoriesData} />;
}
