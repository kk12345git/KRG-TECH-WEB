import { useState, useEffect } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';

const mockReviews = [
    {
        id: 1,
        author: 'Dr. Rajesh Kumar',
        hospital: 'Apollo Hospitals, Chennai',
        rating: 5,
        date: '2026-01-15',
        comment: 'Excellent quality surgical drapes. The SMS material is superior and the sterility is impeccable. Our OT team is very satisfied.',
        verified: true,
        productId: 'universal-drape-pack'
    },
    {
        id: 2,
        author: 'Sr. Procurement Manager',
        hospital: 'Fortis Healthcare, Mumbai',
        rating: 5,
        date: '2026-01-20',
        comment: 'Outstanding service and product quality. The customization options are exactly what we needed for our surgical protocols.',
        verified: true,
        productId: 'universal-drape-pack'
    },
    {
        id: 3,
        author: 'Dr. Priya Menon',
        hospital: 'AIIMS, New Delhi',
        rating: 4,
        date: '2026-02-01',
        comment: 'Great product at competitive pricing. Delivery was prompt and packaging was excellent.',
        verified: true,
        productId: 'ortho-drape-pack'
    }
];

function StarRating({ rating, size = 'w-5 h-5' }) {
    return (
        <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                star <= rating ? (
                    <StarIcon key={star} className={`${size} text-yellow-400`} />
                ) : (
                    <StarOutlineIcon key={star} className={`${size} text-gray-300`} />
                )
            ))}
        </div>
    );
}

export function ProductReviews({ productId }) {
    const [reviews, setReviews] = useState([]);
    const [averageRating, setAverageRating] = useState(0);

    useEffect(() => {
        // Filter reviews for this product
        const productReviews = mockReviews.filter(r => r.productId === productId);
        setReviews(productReviews);

        if (productReviews.length > 0) {
            const avg = productReviews.reduce((sum, r) => sum + r.rating, 0) / productReviews.length;
            setAverageRating(avg);
        }
    }, [productId]);

    if (reviews.length === 0) {
        return null;
    }

    return (
        <div className="bg-white rounded-3xl border border-slate-100 p-8 lg:p-12">
            <div className="mb-8">
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Customer Reviews</h3>
                <div className="flex items-center gap-4">
                    <StarRating rating={Math.round(averageRating)} size="w-6 h-6" />
                    <span className="text-2xl font-black text-slate-900">{averageRating.toFixed(1)}</span>
                    <span className="text-sm text-slate-500">Based on {reviews.length} reviews</span>
                </div>
            </div>

            <div className="space-y-6">
                {reviews.map((review) => (
                    <div key={review.id} className="border-b border-slate-100 pb-6 last:border-0">
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <h4 className="font-bold text-slate-900">{review.author}</h4>
                                    {review.verified && (
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-medical-100 text-medical-700">
                                            Verified Purchase
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-slate-500">{review.hospital}</p>
                            </div>
                            <div className="text-right">
                                <StarRating rating={review.rating} />
                                <p className="text-xs text-slate-400 mt-1">
                                    {new Date(review.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}
                                </p>
                            </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed">{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function ReviewSummary({ productId }) {
    const productReviews = mockReviews.filter(r => r.productId === productId);

    if (productReviews.length === 0) {
        return null;
    }

    const avgRating = productReviews.reduce((sum, r) => sum + r.rating, 0) / productReviews.length;

    return (
        <div className="flex items-center gap-2">
            <StarRating rating={Math.round(avgRating)} />
            <span className="text-sm font-bold text-slate-900">{avgRating.toFixed(1)}</span>
            <span className="text-sm text-slate-500">({productReviews.length} reviews)</span>
        </div>
    );
}

export { StarRating };
