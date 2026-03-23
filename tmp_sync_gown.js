const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/products.json');
const products = JSON.parse(fs.readFileSync(filePath, 'utf8'));

products.forEach(p => {
    if (p.id === 'gown-sms-standard') {
        p.image = '/images/products/gown-sms-standard.png';
    }
});

fs.writeFileSync(filePath, JSON.stringify(products, null, 4), 'utf8');
console.log('Updated products.json for Gown.');
