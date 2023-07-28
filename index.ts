import mongoose from "mongoose";
import "dotenv/config";

import express from "express";
import bodyParser from "body-parser";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import options from "./swaggerOptions";

// DATABASE

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const server = process.env.SERVER;

mongoose.connect(
    `mongodb+srv://${username}:${password}@${server}/?retryWrites=true&w=majority`
);

// API

const app = express();
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());

const PORT = process.env.PORT || 3030;
app.listen(PORT);

console.debug("Server listening on port: " + PORT);

// we need to use swaggerJsdoc to convert the yaml files to json
const specs = swaggerJsdoc({
    ...options,
});

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, {
        explorer: true,
    })
);
