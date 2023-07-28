import express from "express";
import Post from "../model/post";
import { handleErrorResponse } from "../utils/handleErrorResponse";

const router = express.Router();

router.get("/", async function (req, res) {
    try {
        const posts = await Post.find({});
        if (!posts) throw new Error("No posts found");
        res.status(200).json(posts);
    } catch (err) {
        handleErrorResponse(err, res, 404);
    }
});

export default router;
