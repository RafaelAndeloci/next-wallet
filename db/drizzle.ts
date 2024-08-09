import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// Use this in local Development
// const sql = neon(process.env.LOCAL_DB_URL!);

// And this in Production
const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);
