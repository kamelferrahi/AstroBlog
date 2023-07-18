const express = require("express");
const { getAllArticles, getArticleWithContent } = require("../Controllers/articlesController");
const checkArticleExistance = require("../Middlewares/checkArticleExistance");
const router = express.Router();

router.route("/")
    .get(async (req, res, next) => {
        const articles = await getAllArticles();
        res.send(articles);
        next();
    });

router.route("/:id")
    .get(checkArticleExistance, async (req, res, next) => {
        const id = req.params.id;
        const article = await getArticleWithContent(id);
        res.send(article);
        next();
    })


module.exports = router;