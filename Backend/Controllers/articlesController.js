const mysql = require("mysql2");
const env = require("dotenv");
env.config();

const pool = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

async function getAllArticles() {
    const [rows] = await pool.query("SELECT R.id, title, description, date, time, img, comments, article_likes , article_dislikes, user_name, user_profile, user_likes, user_publications, c.community_name, c.profile_img as community_profile FROM(SELECT a.id, title, article_description as description, DATE_FORMAT(date_time, '%M %e, %Y') as date, DATE_FORMAT(date_time, '%H:%i') as time, article_img as img, nb_comments as comments, a.nb_likes as article_likes , nb_dislikes as article_dislikes, fullname as user_name, profile_pic as user_profile, u.nb_likes as user_likes, nb_publications as user_publications, community  FROM article a join user u on a.author = u.id) as R join community c on c.id = R.community order by date, time desc");
    let articles = [];
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        const id = row.id;
        const fields = await getArticleFields(id);
        row["fields"] = fields.map(t => t.field_name);
        articles.push(row);
    }
    return articles;
}

async function getArticleFields(id) {
    const [rows] = await pool.query("SELECT field_name FROM field WHERE article = ?", [id]);
    return rows
}

async function getArticleWithContent(id) {
    const [row] = await pool.query("SELECT R.id, title, description, date, time, img, comments, article_likes , article_dislikes, content, user_name, user_profile, user_likes, user_publications, c.community_name, c.profile_img as community_profile FROM(SELECT a.id, title, article_description as description, DATE_FORMAT(date_time, '%M %e, %Y') as date, DATE_FORMAT(date_time, '%H:%i') as time, article_img as img, nb_comments as comments, a.nb_likes as article_likes , nb_dislikes as article_dislikes, content, fullname as user_name, profile_pic as user_profile, u.nb_likes as user_likes, nb_publications as user_publications, community  FROM article a join user u on a.author = u.id where a.id = ?) as R join community c on c.id = R.community order by date,time desc", [id]);
    if (row[0]) {
        let article = row[0];
        const fields = await getArticleFields(id);
        article["fields"] = fields.map(t => t.field_name);
        article["reviews"] = parseInt(article.article_likes) + parseInt(article.article_dislikes);
        return article;
    }
    return row;
}

async function getArticle(id) {
    const [row] = await pool.query("select * from article where id = ?", [id]);
    return row;
}

async function createArticle(article) {
    const cdate = new Date(Date.now());
    const fields = article.fields;
    const [row1] = await pool.query("INSERT into article (author , community , date_time, title , article_description , article_img , content) values (? , ? ,? ,? ,? , ? , ?) ", [article.author, article.community, cdate, article.title, article.article_description, article.article_img, article.content]);
    let row3 = undefined;
    if (row1.affectedRows > 0 && fields && fields.length > 0) {
        const combo = fields.map(f => `('${f}',${row1.insertId})`);
        [row3] = await pool.query("INSERT into field values " + combo.toString(), []);
    }
    return row3 ? row3 : row1;
}

module.exports = { getAllArticles, getArticle, getArticleWithContent, createArticle };