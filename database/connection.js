import 'dotenv/config'
import pg from 'pg'
const { Pool, } = pg

const connectionString = process.env.CONNECTION_STRING_BDSolar


export const pool = new Pool({
    connectionString,
    allowExitOnIdle: true
})

try {
    await pool.query('SELECT $1::text as message', ['Hello world!'])
    console.log("BD conectada") // Hello world!
} catch (err) {
    console.error(err);
} 