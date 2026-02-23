
import fs from 'fs';
import path from 'path';

const productsPath = path.join(process.cwd(), 'src', 'data', 'products.json');
const imagesDir = path.join(process.cwd(), 'public', 'images', 'products');

try {
    // 1. Read the products data
    const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

    // 2. Read the files in the images directory
    if (!fs.existsSync(imagesDir)) {
        console.log('Images directory does not exist. Creating it now...');
        fs.mkdirSync(imagesDir, { recursive: true });
        process.exit(0);
    }

    const imageFiles = fs.readdirSync(imagesDir);
    let updateCount = 0;

    // 3. Match images to products by ID
    const updatedProducts = products.map(product => {
        // Look for a file named "product-id.jpg", "product-id.png", etc.
        const matchingFile = imageFiles.find(file => {
            const fileNameWithoutExt = path.parse(file).name;
            return fileNameWithoutExt === product.id;
        });

        if (matchingFile) {
            const newImagePath = `/images/products/${matchingFile}`;
            if (product.image !== newImagePath) {
                product.image = newImagePath;
                updateCount++;
                console.log(`✅ Matched: ${product.name} -> ${matchingFile}`);
            }
        }
        return product;
    });

    // 4. Save the updated file
    if (updateCount > 0) {
        fs.writeFileSync(productsPath, JSON.stringify(updatedProducts, null, 4));
        console.log(`\nDONE! Updated ${updateCount} products with real image paths.`);
    } else {
        console.log('\nNo new matching images found. Ensure your image filename matches the Product ID exactly.');
    }

} catch (error) {
    console.error('Error importing images:', error);
}
