const express = require("express");
const router = express.Router();
const { checkNewUser } = require("../Middlewares/checkNewUser");
const { addNewUser } = require("../Controllers/usersControllers");

router.route("/")
    .post(checkNewUser, async (req, res, next) => {
        const user = req.body;
        const result = await addNewUser(user);
        console.log(result);
        if (result.length > 0) {
            res.status(201).send("success");
            next();
        } else {
            res.status(401).send("Element insert failed!");
        }
    });

module.exports = router;