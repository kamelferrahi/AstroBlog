const mysql = require("mysql2");
const env = require("dotenv");
env.config();

const pool = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

async function getAllComments() {
    const [rows] = await pool.query("SELECT c.id ,article, u.fullname as user_name , u.nb_publications as user_publications ,u.nb_likes as user_likes , u.profile_pic as user_pic , DATE_FORMAT(date_time, '%M %e, %Y') as date , DATE_FORMAT(date_time, '%H:%i') as time  , comment_text as text from comment as c join user u on u.id = c.user order by date_time");
    return rows;
}

async function getArticleComments(id) {
    const [rows] = await pool.query("SELECT c.id ,article, u.fullname as user_name , u.nb_publications as user_publications ,u.nb_likes as user_likes , u.profile_pic as user_pic , DATE_FORMAT(date_time, '%M %e, %Y') as date , DATE_FORMAT(date_time, '%H:%i') as time  , comment_text as text from comment as c join user u on u.id = c.user where article = ? order by date_time", [id]);
    return rows;
}

module.exports = { getAllComments, getArticleComments };