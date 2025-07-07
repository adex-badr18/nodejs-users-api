import { Pool } from "pg";
import "dotenv/config";

export const pool = new Pool({
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
});
