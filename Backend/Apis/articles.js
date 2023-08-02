const express = require("express");
const { getAllArticles, getArticleWithContent, createArticle } = require("../Controllers/articlesController");
const checkArticleExistance = require("../Middlewares/checkArticleExistance");

const router = express.Router();

router.route("/")
    .get(async (req, res, next) => {
        const articles = await getAllArticles();
        res.send({ articles: articles, userId: req.userId });
        next();
    })
    .post(async (req, res, next) => {
        const result = await createArticle(req.body);
        if (result.affectedRows > 0) {
            res.status(201);
            next();
        } else {
            res.sendStatus(401);
        }
    });


router.route("/:id")
    .get(checkArticleExistance, async (req, res, next) => {
        const id = req.params.id;
        const article = await getArticleWithContent(id);
        res.send(article);
        next();
    });


module.exports = router;