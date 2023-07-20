const express = require("express");
const router = express.Router();
const { updateRefreshToken } = require("../Controllers/usersControllers");


router.route("/")
    .get(async (req, res, next) => {
        await updateRefreshToken(req.body.userId);
        res.clearCookie("jwt");
        res.clearCookie("token");
        res.sendStatus(200);
        next();
    })


module.exports = router;