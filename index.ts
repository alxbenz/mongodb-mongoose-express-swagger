import mongoose from "mongoose";
import "dotenv/config";

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const server = process.env.SERVER;

mongoose.connect(
    `mongodb+srv://${username}:${password}@${server}/?retryWrites=true&w=majority`
);
