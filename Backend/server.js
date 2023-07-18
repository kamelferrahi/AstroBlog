const express = require("express");
const env = require("dotenv");
const cors = require("cors");
const articles = require("./Apis/articles");
const comments = require("./Apis/comments");
const communities = require("./Apis/communities");

env.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use("/articles", articles);
app.use("/comments", comments);
app.use("/communities", communities);

app.get("/", (req, res) => {
    res.status(200).send("This is the route of the backend server");
})



app.listen(PORT, () => {
    console.log(`server has been started at port ${PORT}`);
})