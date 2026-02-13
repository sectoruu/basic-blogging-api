import { pool } from "../data/db.js";

const [posts] = await pool.query('SELECT * FROM posts ORDER BY created_at DESC')
const sorted = posts.map((post, index) => ({
    ...post,
    number: ++index
}))

console.log(sorted)
await pool.end()