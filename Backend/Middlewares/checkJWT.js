const jwt = require("jsonwebtoken");
require("dotenv").config();


const verifyJWT = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        res.sendStatus(401);
    } else {
        jwt.verify(
            token,
            process.env.ACCESS_TOKEN_SECRET,
            (err, decoded) => {
                if (err) {
                    res.sendStatus(403);
                } else {
                    req.userId = decoded.userId;
                    next();
                }
            }
        );
    }
}


module.exports = verifyJWT;