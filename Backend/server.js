const express = require("express");
const env = require("dotenv");
const cors = require("cors");
const articles = require("./Apis/articles");
const comments = require("./Apis/comments");
const communities = require("./Apis/communities");
const signup = require("./Apis/signup");
const login = require("./Apis/login");
const verifyJWT = require("./Middlewares/checkJWT");
const cookieParser = require("cookie-parser");
const refresh = require("./Apis/refresh");
const logout = require("./Apis/logout");


env.config();

const app = express();
const PORT = process.env.PORT;
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/register", signup);
app.use("/login", login);
app.use("/refresh", refresh);
app.use(verifyJWT);
app.use("/articles", articles);
app.use("/comments", comments);
app.use("/communities", communities);
app.use("/logout", logout);

app.get("/", (req, res) => {
    res.status(200).send("This is the route of the backend server");
})


app.listen(PORT, () => {
    console.log(`server has been started at port ${PORT}`);
})