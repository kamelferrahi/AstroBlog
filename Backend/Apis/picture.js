const express = require("express");
const router = new express.Router();
const fs = require("fs");

router.route("/:pic")
    .get((req, res, next) => {
        const imageName = req.params.pic;
        const readStream = fs.createReadStream(`AllPictures/${imageName}`);
        readStream.pipe(res);
    })

module.exports = router;