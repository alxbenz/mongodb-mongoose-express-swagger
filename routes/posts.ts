import express from "express";
import Post from "../model/post";

const router = express.Router();

router.get("/", async function (req, res) {
    const posts = await Post.find({});

	res.status(200).json(posts);
});

export default router;