import { pool } from "../data/db.js"

export const blogService = {
    async post(title, content, category, tags) {
        
        try {

            const [result] = await pool.query('INSERT INTO posts (title, content, category, tags) VALUES (?, ?, ?, ?)', [title, content, category, JSON.stringify(tags)])
            return result

        } catch (error) {
            console.error("Service DB error:", error)
            throw new Error("Failed to create post")
        }

    },
    async update(id, title, content, category, tags) {

        try {
            const [result] = await pool.query(
                'UPDATE posts SET title = ?, content = ?, category = ?, tags = ? WHERE id = ?', 
                [title, content, category, JSON.stringify(tags), id]
            )
            return result
        } catch (error) {
            console.error("Service DB error:", error)
            throw new Error("Failed to update post")
        }

    },
    async delete(id) {

        try {

            const [result] = await pool.query('DELETE FROM posts WHERE id = ?', [id])
            return result

        } catch (error) {
            console.error("Service DB error:", error)
            throw new Error("Failed to delete post")
        }

    },
    async getAll(term) {

        try {

            if (term) {
                const search = `%${term}%`
                const [rows] = await pool.query('SELECT * FROM posts WHERE title LIKE ? OR content LIKE ? OR category LIKE ?', [search, search, search])
                return rows[0]
            }
            const [rows] = await pool.query('SELECT * FROM posts')
            return rows

        } catch (error) {
            console.error("Service DB error:", error)
            throw new Error("Failed to retrieve posts")
        }

    },
    async getById(id) {

        try {

            const [rows] = await pool.query('SELECT * FROM posts WHERE id = ?', [id])
            return rows[0]

        } catch (error) {
            console.error("Service DB error:", error)
            throw new Error("Failed to get post")
        }

    }
}