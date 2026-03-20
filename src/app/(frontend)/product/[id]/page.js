import { getProducts } from '@/lib/actions';
import ProductDetailClient from './Client';

export default async function ProductDetailPage({ params }) {
    const { id } = await params;
    const productsData = await getProducts();
    const productId = id;

    // Fallback find if fetching returns an array
    const product = productsData.find(p => p.id === productId || p.slug === productId) || null;

    return <ProductDetailClient product={product} productsData={productsData} />;
}
