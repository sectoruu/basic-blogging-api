import { blogService } from "../services/blog.service.js"

export const blogController = {
    async post(req, res) {

        try {

            const {title, content, category, tags} = req.body
            if (!title || !content || !category || !tags) return res.status(400).json({error: "Missing fields"})
        
            const result = await blogService.post(title, content, category, tags)
            res.status(201).json({
                message: "Blog created",
                blogId: result.insertId
            })

        } catch (error) {
            console.error("Controller error: ", error.message)
            res.status(500).json({error: error.message})
        }

    },
    async update(req, res) {

        try {

            const { id } = req.params
            const {title, content, category, tags} = req.body

            if (!id) return res.status(400).json({error: "Missing post ID"})
            if (!title || !content || !category || !tags) return res.status(400).json({error: "Missing fields"})

            const result =  await blogService.update(id, title, content, category, tags)

            if (result.affectedRows === 0) return res.status(404).json({error: "Post not found"})
            res.json({message: "Post updated successfully"}) 

        } catch (error) {
            console.error("Controller error: ", error.message)
            res.status(500).json({error: error.message})
        }

    },
    async delete(req, res) {

        try {

            const id = req.params.id
            if (!id) return res.status(400).json({error: "Missing post ID"})

            const result = await blogService.delete(id)
            if (result.affectedRows === 0) return res.status(404).json({error: "Post not found"})
            res.json({message: "Post deleted successfully"})

        } catch (error) {
            console.error("Controller error: ", error.message)
            res.status(500).json({error: error.message})
        }

    },
    async getAll(req, res) {

        try {

            const term = req.query.term
            const posts = await blogService.getAll(term)
            if (!posts) return res.json(404).json({error: "Posts not found"})
            res.json(posts)

        } catch (error) {
            console.error("Controller error: ", error.message)
            res.status(500).json({error: error.message})
        }

    },
    async getById(req, res) {

        try {

            const id = parseInt(req.params.id)
            if (isNaN(id)) return res.status(400).json({error: "Invalid post ID"})

            const post = await blogService.getById(id)
            if (!post) return res.status(404).json({error: "Post not found"})

            res.json(post)

        } catch (error) {
            console.error("Controller error: ", error.message)
            res.status(500).json({error: error.message})
        }

    }
}