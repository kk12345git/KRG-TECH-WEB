import { getCategories } from '@/lib/actions';
import CategoriesClient from './Client';

export default async function CategoriesPage() {
    const initialCategories = await getCategories();
    return <CategoriesClient initialCategories={initialCategories} />;
}
