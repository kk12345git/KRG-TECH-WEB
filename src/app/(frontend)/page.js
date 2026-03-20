import { getCategories, getBanners, getStats } from '@/lib/actions';
import HomeClient from './Client';

export const metadata = {
    title: 'KRG Medifabb | ISO Certified Surgical Disposables Manufacturer Chennai',
    description: 'KRG Medifabb manufactures premium surgical drape packs, disposable OT sheets, surgeon gowns and patient wears. ISO 13485:2016 certified. Trusted by 500+ hospitals.',
}

export default async function Home() {
    const banners = await getBanners();
    const stats = await getStats();
    const categories = await getCategories();
    return <HomeClient banners={banners} stats={stats} categories={categories} />;
}
