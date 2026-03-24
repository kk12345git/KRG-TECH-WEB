const { Client } = require('pg');

async function main() {
    const client = new Client({
        connectionString: process.env.DATABASE_URL
    });
    await client.connect();
    const res = await client.query('SELECT * FROM public._prisma_migrations;');
    console.log(JSON.stringify(res.rows, null, 2));
    await client.end();
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
