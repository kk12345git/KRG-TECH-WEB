import { getProducts } from '@/lib/actions';
import DashboardClient from './Client';

export default async function DashboardPage() {
    const productsData = await getProducts();
    return <DashboardClient productsData={productsData} />;
}
