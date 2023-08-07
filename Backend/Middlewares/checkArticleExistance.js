const { getArticle } = require("../Controllers/articlesController");

const checkArticleExistance = async (req, res, next) => {
    const id = req.params.id;
    if (isNaN(id)) {
        res.status(400).send("this is not a valid article id");
    } else {
        const result = await getArticle(id);
        if (!result || result.length === 0) {
            res.status(404).send("this article doesn't exist");
        } else {
            next();
        }
    }
}


module.exports = checkArticleExistance;