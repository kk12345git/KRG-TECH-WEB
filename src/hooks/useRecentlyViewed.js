import { useState, useEffect } from 'react';

const STORAGE_KEY = 'krg_recently_viewed';
const MAX_ITEMS = 10;

export function useRecentlyViewed() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            try {
                setItems(JSON.parse(stored));
            } catch (e) {
                console.error('Failed to parse recently viewed items', e);
            }
        }
    }, []);

    const addProduct = (product) => {
        if (!product || !product.id) return;

        setItems(prevItems => {
            const filtered = prevItems.filter(item => item.id !== product.id);
            const newItems = [product, ...filtered].slice(0, MAX_ITEMS);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));
            return newItems;
        });
    };

    const clearHistory = () => {
        localStorage.removeItem(STORAGE_KEY);
        setItems([]);
    };

    return { items, addProduct, clearHistory };
}
