import { getCategories, getBanners, getStats } from '@/lib/actions';
import HomeClient from './Client';

export default async function Home() {
    const banners = await getBanners();
    const stats = await getStats();
    const categories = await getCategories();
    return <HomeClient banners={banners} stats={stats} categories={categories} />;
}
