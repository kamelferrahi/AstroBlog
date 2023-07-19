const express = require("express");
const checkCredentials = require("../Middlewares/checkCredentials");
const router = express.Router();

router.route("/")
    .post(checkCredentials, (req, res, next) => {
        //add entry in the log file
        res.status(200).send("success");
        next();
    });


module.exports = router;