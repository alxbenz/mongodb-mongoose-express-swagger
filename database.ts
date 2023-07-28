// DATABASE
import mongoose from "mongoose";
import "dotenv/config";

export const connectToDB = () => {
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;
    const server = process.env.SERVER;
    const database = process.env.DATABASE;

    mongoose.connect(
        `mongodb+srv://${username}:${password}@${server}/${database}?retryWrites=true&w=majority`
    );
};
