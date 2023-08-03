const express = require("express");
const { getAllComments, getArticleComments, AddComment, getMaxComments } = require("../Controllers/commentsController");
const checkArticleExistance = require("../Middlewares/checkArticleExistance");

const router = express.Router();


router.route("/")
    .get(async (req, res, next) => {
        const comments = await getAllComments();
        res.send(comments);
        next();
    });

router.route("/:id-:max")
    .get(checkArticleExistance, async (req, res, next) => {
        const max = parseInt(req.params.max);
        const id = req.params.id;
        const result = await getMaxComments(id, max);
        res.send(result);
        next();
    });

router.route("/:id")
    .get(checkArticleExistance, async (req, res, next) => {
        const id = req.params.id;
        const comments = await getArticleComments(id);
        res.send(comments);
        next();
    })
    .post(async (req, res, next) => {
        const id = req.params.id;
        const result = await AddComment(req.body, id);
        if (result.affectedRows > 0) {
            res.status(200);
            next();
        } else {
            res.sendStatus(401);
        }
    });


module.exports = router;