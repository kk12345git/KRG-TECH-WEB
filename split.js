const fs = require('fs');

const filesToFix = [
    'src/app/(admin)/admin/categories/page.js',
    'src/app/(admin)/admin/dashboard/page.js',
    'src/app/(admin)/admin/products/page.js',
    'src/app/(frontend)/category/[id]/page.js',
    'src/app/(frontend)/products/page.js',
    'src/app/(frontend)/product/[id]/page.js',
    'src/app/(frontend)/page.js'
];

for (const file of filesToFix) {
    if (!fs.existsSync(file)) {
        console.log('Skipping missing file: ' + file);
        continue;
    }
    const code = fs.readFileSync(file, 'utf8');

    const splitMatch = code.match(/(\n\s*(?:\/\/.*[\r\n]+)*\s*export default async function[^\0]+)/);
    if (!splitMatch) {
        console.log('Split point not found in: ' + file);
        continue;
    }

    let splitIndex = splitMatch.index;

    let clientCode = code.substring(0, splitIndex);
    let serverCode = code.substring(splitIndex).trim();

    const clientMatch = clientCode.match(/function\s+([A-Za-z0-9]+Client)\s*\(/);
    let clientName = clientMatch ? clientMatch[1] : null;

    if (!clientName) {
        console.log('Client function not found in: ' + file);
        continue;
    }

    let modifiedClientCode = clientCode.replace(new RegExp(`function\\s+${clientName}\\s*\\(`), `export default function ${clientName}(`);

    const clientFile = file.replace('page.js', 'Client.js');
    fs.writeFileSync(clientFile, modifiedClientCode, 'utf8');

    const actionNames = [];
    if (serverCode.includes('getCategories')) actionNames.push('getCategories');
    if (serverCode.includes('getProducts')) actionNames.push('getProducts');
    if (serverCode.includes('getBanners')) actionNames.push('getBanners');
    if (serverCode.includes('getStats')) actionNames.push('getStats');

    let actionImportStr = actionNames.length > 0 ? `import { ${actionNames.join(', ')} } from '@/lib/actions';\n` : '';

    let finalServerCode = `${actionImportStr}import ${clientName} from './Client';\n\n` + serverCode + `\n`;

    fs.writeFileSync(file, finalServerCode, 'utf8');
    console.log("Successfully split " + file);
}
