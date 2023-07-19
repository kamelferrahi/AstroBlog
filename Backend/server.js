const express = require("express");
const env = require("dotenv");
const cors = require("cors");
const articles = require("./Apis/articles");
const comments = require("./Apis/comments");
const communities = require("./Apis/communities");
const signup = require("./Apis/signup");
const login = require("./Apis/login");

env.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use("/articles", articles);
app.use("/comments", comments);
app.use("/communities", communities);
app.use("/register", signup);
app.use("/login", login);

app.get("/", (req, res) => {
    res.status(200).send("This is the route of the backend server");
})



app.listen(PORT, () => {
    console.log(`server has been started at port ${PORT}`);
})