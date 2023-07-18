const express = require("express");
const { getAllCommunities, getCommunity } = require("../Controllers/communitiesController");

const router = express.Router();


router.route("/")
    .get(async (req, res, next) => {
        const comments = await getAllCommunities();
        res.send(comments);
        next();
    });
router.route("/:id")
    .get(async (req, res, next) => {
        const id = req.params.id;
        const comments = await getCommunity(id);
        res.send(comments);
        next();
    });


module.exports = router;