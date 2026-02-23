
import fs from 'fs';
import path from 'path';

const productsPath = path.join(process.cwd(), 'src', 'data', 'products.json');

try {
    const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
    let updatedCount = 0;

    const updatedProducts = products.map(product => {
        if (!product.image) {
            const encodedName = encodeURIComponent(product.name);
            // Using a clean, clinical color scheme for placeholders (Slate-100 bg, Slate-700 text)
            product.image = `https://placehold.co/800x600/f1f5f9/334155?text=${encodedName}`;
            updatedCount++;
        }
        return product;
    });

    fs.writeFileSync(productsPath, JSON.stringify(updatedProducts, null, 4));
    console.log(`Successfully assigned placeholders to ${updatedCount} products.`);
} catch (error) {
    console.error('Error updating products:', error);
}
