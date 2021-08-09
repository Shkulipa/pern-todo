require("dotenv").config();
const host = process.env.HOST;
const port = process.env.PORT;

const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());

// ROUTES
const todo = require("./routes/todo");
app.use("/todos", todo);

app.listen(port, () => {
    console.log(`Example app listening at http://${host}:${port}`);
});
