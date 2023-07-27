import mongoose, { SchemaTypes } from "mongoose";
const { Schema, model } = mongoose;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        lowercase: true,
    },
    published: {
        type: Boolean,
        default: false,
    },
    content: String,
    tags: [String],
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
    updatedAt: Date,
});

blogSchema.pre("save", function (next) {
    this.updatedAt = Date.now() as unknown as Date; // update the date every time a blog post is saved
    next();
});

const Blog = model("Blog", blogSchema);
export default Blog;
