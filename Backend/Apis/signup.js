const express = require("express");
const router = express.Router();
const { checkNewUser } = require("../Middlewares/checkNewUser");
const { addNewUser } = require("../Controllers/usersControllers");

router.route("/")
    .post(checkNewUser, async (req, res, next) => {
        const user = req.body;
        const result = await addNewUser(user);
        if (result.length > 0) {
            // add entry in log file
            res.status(201).send("success");
            next();
        } else {
            // add entry in errors log file
            res.status(401).send("Element insert failed!");
        }
    });

module.exports = router;