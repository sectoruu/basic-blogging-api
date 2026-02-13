import { Router } from "express";
import { blogController } from "../controllers/blog.controller.js";

const router = Router()

router.post('/', blogController.post)
router.put('/:id', blogController.update)
router.delete('/:id', blogController.delete)
router.get('/', blogController.getAll)
router.get('/:id', blogController.getById)

export const blogRoutes = router