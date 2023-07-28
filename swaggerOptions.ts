const options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "alex-benz.de Blog API",
            version: "0.1.0",
            description:
                "This is a CRUD API application made with Express and documented with Swagger using MongoDB.",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Alexander Benz",
                url: "https://www.alex-benz.de",
            },
        },
        servers: [
            {
                url: "http://localhost:3030",
            },
        ],
    },
    apis: ["./docs/*.yaml"],
};

export default options;