const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient(process.env.VUE_APP_ATLAS_CON_STRING!, { useUnifiedTopology: true });

export async function connect() {
    await client.connect();
    return client.db(process.env.VUE_APP_ATLAS_DB_NAME);
}

export function disconnect() {
    client.close();
}