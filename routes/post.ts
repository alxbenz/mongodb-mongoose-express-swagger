import express from "express";
import Post from "../model/post";
import mongoose from "mongoose";

const router = express.Router();

const demoPost = {
    title: "Demo Post",
    slug: "demo-post",
    published: true,
    content: "This is a demo post",
    tags: ["demo", "post"],
    createdAt: Date.now(),
};

router.post("/", async function (req, res) {
    const { title } = req.body; // TODO ADD REST OF FIELDS

    console.log({ 
        ...demoPost,
        title: title ? title : demoPost.title,
    })

	const post = new Post({ 
        ...demoPost,
        title: title ? title : demoPost.title,
    });

    console.log(post);

    await post.save();

	res.status(201).json(post);
});

export default router;