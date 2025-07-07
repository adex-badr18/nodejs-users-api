import { Client } from "pg";
import "dotenv/config";

const DB_NAME = process.env.DB_DATABASE;
const DB_USER = process.env.DB_USER;
const DB_HOST = process.env.DB_HOST;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_PORT = process.env.DB_PORT;

const createDbIfNotExist = async () => {
    const client = new Client({
        database: "postgres",
        password: DB_PASSWORD,
        user: DB_USER,
        port: DB_PORT,
        host: DB_HOST,
    });

    try {
        await client.connect();

        const dbCheckResponse = await client.query(
            `SELECT 1 FROM pg_database WHERE datname = $1;`,
            [DB_NAME]
        );

        if (dbCheckResponse.rowCount === 0) {
            await client.query(`CREATE DATABASE ${DB_NAME};`);
            console.log(`Database ${DB_NAME} created.`);
        } else {
            console.log(`Database ${DB_NAME} already exists.`);
        }
    } catch (error) {
        console.error("Error creating Database:", error.message);
    } finally {
        await client.end();
    }
};

const createUsersTableIfNotExist = async () => {
    const client = new Client({
        database: DB_NAME,
        password: DB_PASSWORD,
        user: DB_USER,
        port: DB_PORT,
        host: DB_HOST,
    });

    try {
        await client.connect();

        const tableQuery = `
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100),
                email VARCHAR(100),
                age INTEGER
            );
        `;

        await client.query(tableQuery);
        console.log(`Table "users" created!`);
    } catch (error) {
        console.error("Error creating table:", error.message);
    } finally {
        await client.end();
    }
};

(async () => {
    await createDbIfNotExist();
    await createUsersTableIfNotExist();
})();
