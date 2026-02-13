import dotenv from "dotenv"
dotenv.config()
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const PORT = process.env.PORT || 3000
export const DB_HOST = process.env.DB_HOST
export const DB_USER = process.env.DB_USER
export const DB_PASSWORD = process.env.DB_PASSWORD
export const DB_NAME = process.env.DB_NAME
export const ROOT_DIR = path.join(__dirname, '..')
export const DATA_DIR = path.join(ROOT_DIR, "data")
export const BLOG_DATABASE = path.join(DATA_DIR, "db.js")