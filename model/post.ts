import mongoose from "mongoose";
const { Schema, model } = mongoose;

const postSchema = new Schema({
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

postSchema.pre("save", function (next) {
    this.updatedAt = Date.now() as unknown as Date; // update the date every time a post post is saved
    next();
});

const Post = model("Post", postSchema);
export default Post;
