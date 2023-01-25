const express = require("express");
const cors = require("cors")

const port = 8000;
const app = express();

app.use(cors());

app.get("/", (request, response) => {
    response.json({ id: 1, name: "nado" });
})

app.get("/calc", (request, response) => {

    console.log(request.query);

    const { a, b, act } = request.query;

    let result = ""
    if (act == "aadd") {
        result = Number(a) + Number(b)
    } else if (act == "a*") {
        result = Number(a) * Number(b)
    } else if (act == "a/") {
        result = Number(a) / Number(b)
    } else if (act == "a-") {
        result = Number(a) - Number(b)
    } else {
        result = "error"
    }
    response.json({ value: result });
})

app.listen(port, () => {
    console.log("Server is running");
})