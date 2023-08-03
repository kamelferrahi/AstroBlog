const express = require("express");
const router = express.Router();
const { updateRefreshToken } = require("../Controllers/usersControllers");

router.route("/")
    .get(async (req, res, next) => {
        const result = await updateRefreshToken(req.userId);
        if (result.affectedRows == 1) {
            res.clearCookie("jwt");
            res.clearCookie("token");
            res.sendStatus(200);
            next();
        } else {
            res.status(401);
        }
    });


module.exports = router;