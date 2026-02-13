import express from "express"
import cors from "cors"
import morgan from "morgan"
import { blogRoutes } from "../routes/blog.routes.js"

export const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use('/posts', blogRoutes)