import express from "express"
import {addNews, viewNewsList,multipleNews} from "../controllers/newsController.js"

const router = express.Router()

router.get("/news-list",viewNewsList)
router.post("/add-news",addNews)
router.post("/multiple-news",multipleNews)
// router.delete("/news/:_id",viewNewsList)

export default router
