import express from "express";
import Post from "../model/post";
import { handleErrorResponse } from "../utils/handleErrorResponse";

const router = express.Router();

router.post("/", async function (req, res) {
    const post = new Post(req.body);

    try {
        const savedPost = await post.save();
        res.status(201).json(savedPost);
    } catch (err) {
        handleErrorResponse(err, res);
    }
});

router.get("/:postId", async function (req, res) {
    const id = req.params.postId;

    try {
        const post = await Post.findById(id);
        if (!post) throw new Error("Post not found");
        res.status(200).json(post);
    } catch (err) {
        handleErrorResponse(err, res, 404);
    }
});

router.patch("/:postId", async function (req, res) {
    const id = req.params.postId;

    try {
        const updatedPost = await Post.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!updatedPost) throw new Error("Post not found");
        res.status(200).json(updatedPost);
    } catch (err) {
        handleErrorResponse(err, res, 404);
    }
});

router.delete("/:postId", async function (req, res) {
    const id = req.params.postId;

    try {
        const deletedPost = await Post.findByIdAndDelete(id);
        if (!deletedPost) throw new Error("Post not found");
        res.status(204).end();
    } catch (err) {
        handleErrorResponse(err, res, 404);
    }
});

router.get("/:postId/publish", async function (req, res) {
    const id = req.params.postId;

    try {
        const updatedPost = await Post.findByIdAndUpdate(id, {
            published: true,
        });
        if (!updatedPost) throw new Error("Post not found");
        res.status(204).end();
    } catch (err) {
        handleErrorResponse(err, res, 404);
    }
});

router.get("/:postId/unpublish", async function (req, res) {
    const id = req.params.postId;

    try {
        const updatedPost = await Post.findByIdAndUpdate(id, {
            published: false,
        });
        if (!updatedPost) throw new Error("Post not found");
        res.status(204).end();
    } catch (err) {
        handleErrorResponse(err, res, 404);
    }
});

export default router;
