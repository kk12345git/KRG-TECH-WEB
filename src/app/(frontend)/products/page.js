import { getCategories } from '@/lib/actions';
import ProductsClient from './Client';

export const metadata = {
    title: 'Surgical Drape Packs & Medical Disposables Catalog | KRG Medifabb',
    description: 'Browse KRG Medifabb complete catalog of surgical disposables including drape packs, OT sheets, surgeon gowns, patient gowns and sterilization wraps.',
}

export default async function ProductsPage() {
    const categoriesData = await getCategories();
    return <ProductsClient categoriesData={categoriesData} />;
}
