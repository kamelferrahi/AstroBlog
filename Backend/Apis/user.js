const express = require("express");
const router = express.Router();
const { getUserProfile } = require("../Controllers/usersControllers");


router.route("/")
    .get(async (req, res, next) => {
        res.sendStatus(401);
        next();
    });

router.route("/:id")
    .get(async (req, res, next) => {
        const id = req.params.id;
        const result = await getUserProfile(id);
        if (result.length !== 1) {
            res.sendStatus(404);
        } else {
            res.status(200).json(result[0]);
            next();
        }
    });

module.exports = router;