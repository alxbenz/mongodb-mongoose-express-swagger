
import express from "express";
import bodyParser from "body-parser";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import options from "./swaggerOptions";
import { connectToDB } from "./database";
import postsRouter from "./routes/posts";
import postRouter from "./routes/post";

// DB 
connectToDB();

// EXPRESS SERVER
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

// APIs
app.use("/posts", postsRouter);
app.use("/post", postRouter);


// SWAGGER
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
