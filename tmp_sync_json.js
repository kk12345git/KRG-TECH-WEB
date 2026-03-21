const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/products.json');
const products = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const updates = {
    'gen-surgical-drape-pack': '/images/products/gen-surgical-drape-pack.png',
    'mini-drape-pack': '/images/products/mini-drape-pack.png',
    'universal-drape-pack': '/images/products/universal-drape-pack.png',
    'hb-sag-drape-pack': '/images/products/hb-sag-drape-pack.png',
    'hiv-protection-drape-kit': '/images/products/hiv-protection-drape-kit.png',
    'ortho-drape-pack': '/images/products/ortho-drape-pack.png',
    'knee-arthroscopy': '/images/products/knee-arthroscopy.png',
    'shoulder-arthroscopy': '/images/products/shoulder-arthroscopy.png',
    'lscs-drape-pack': '/images/products/lscs-drape-pack.png',
    'delivery-drape-pack': '/images/products/delivery-drape-pack.png',
    'dnc-drape-kit': '/images/products/dnc-drape-kit.png',
    'hystro-lap-pouch': '/images/products/hystro-lap-pouch.png',
    'perineal-drape-kit': '/images/products/perineal-drape-kit.png',
    'maternity-mat': '/images/products/maternity-mat.png',
    'sms-sterilization-wrap-blue': '/images/products/sms-sterilization-wrap-blue.png',
    'sequential-sterilization-wrap': '/images/products/sequential-sterilization-wrap.png',
    'sms-sterilization-wrap-green': '/images/products/sms-sterilization-wrap-green.png'
};

products.forEach(p => {
    if (updates[p.id]) {
        p.image = updates[p.id];
    }
});

fs.writeFileSync(filePath, JSON.stringify(products, null, 4), 'utf8');
console.log('Updated products.json successfully.');
