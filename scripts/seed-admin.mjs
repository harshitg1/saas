import bcrypt from "bcryptjs";
import { config } from "dotenv";
import postgres from "postgres";

config({ path: ".env" });

const databaseUrl = process.env.DATABASE_URL;
const email = process.env.ADMIN_SEED_EMAIL?.toLowerCase().trim();
const password = process.env.ADMIN_SEED_PASSWORD;
const name = process.env.ADMIN_SEED_NAME || "Legacy85 Admin";

if (!databaseUrl) {
  throw new Error("DATABASE_URL is required");
}

if (!email || !password) {
  throw new Error("ADMIN_SEED_EMAIL and ADMIN_SEED_PASSWORD are required");
}

const sql = postgres(databaseUrl, { max: 1, prepare: false });
const passwordHash = await bcrypt.hash(password, 12);

await sql`
  INSERT INTO admin_users (name, email, password_hash, role)
  VALUES (${name}, ${email}, ${passwordHash}, 'admin')
  ON CONFLICT (email)
  DO UPDATE SET
    name = EXCLUDED.name,
    password_hash = EXCLUDED.password_hash,
    role = 'admin',
    updated_at = now()
`;

await sql.end();

console.log(`Seeded admin user: ${email}`);
