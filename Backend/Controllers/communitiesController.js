const mysql = require("mysql2");
const env = require("dotenv");
env.config();

const pool = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

async function getAllCommunities() {
    const [rows] = await pool.query("SELECT * from community");
    return rows;
}

async function getCommunity(id) {
    const [rows] = await pool.query("SELECT * from community where id = ?", [id]);
    return rows;
}

module.exports = { getAllCommunities, getCommunity };