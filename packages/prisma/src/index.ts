import "dotenv/config"
import { PrismaClient } from "@prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import { Pool } from "pg"


console.log("DB URL:", process.env.DATABASE_URL)


const pool = new Pool({
  connectionString:"postgresql://neondb_owner:npg_tE8YksxIQup1@ep-calm-mud-adtwg0ns-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  ssl: {
    rejectUnauthorized: false
  }
})

const adapter = new PrismaPg(pool)

export const client = new PrismaClient({
  adapter
})