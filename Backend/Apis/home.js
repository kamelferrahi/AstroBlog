const express = require("express");
const getArticleSearch = require("../Controllers/searchEngineController");
const router = express.Router();



router.route("/").get(async ( req, res)=>{
    const search = req.query
    console.log("ss")
    if (search) {
        const param = search.search
        const results = await getArticleSearch(param)
        if (results) {
            res.status(200).json(results)
        }
        else {
            res.status(400).json({})
        }
    }
})

module.exports = router;