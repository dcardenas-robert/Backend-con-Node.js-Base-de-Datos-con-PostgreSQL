const { Client } = require('pg');
const { config } = require('../config/config');
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}/${config.dbName}`

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'lizmark',
    password: '12345',
    database: 'my_store',
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
