const express = require("express");
const { getAllComments, getArticleComments } = require("../Controllers/commentsController");
const checkArticleExistance = require("../Middlewares/checkArticleExistance");

const router = express.Router();


router.route("/")
    .get(async (req, res, next) => {
        const comments = await getAllComments();
        res.send(comments);
        next();
    });
router.route("/:id")
    .get(checkArticleExistance, async (req, res, next) => {
        const id = req.params.id;
        const comments = await getArticleComments(id);
        res.send(comments);
        next();
    });


module.exports = router;