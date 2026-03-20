import { getCategories } from '@/lib/actions';
import ProductsClient from './Client';

export default async function ProductsPage() {
    const categoriesData = await getCategories();
    return <ProductsClient categoriesData={categoriesData} />;
}
