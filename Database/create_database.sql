CREATE DATABASE IF NOT EXISTS astroblog_db;
USE astroblog_db;

CREATE TABLE IF NOT EXISTS USER(
    id int primary key AUTO_INCREMENT,
    email varchar(50) not null,
    fullname varchar(50) not null,
    nb_publications int not null default 0,
    nb_likes int not null default 0,
    is_admin bool not null,
    profile_pic varchar(200) not null default "https://images.unsplash.com/photo-1645536908932-652fbd998029?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM2fHxhc3Ryb25hdXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    category varchar(15) not null,
    details varchar(100),
    user_password varchar(100) not null,
    refresh_token varchar(255)
);

CREATE TABLE IF NOT EXISTS COMMUNITY(
    id int primary key AUTO_INCREMENT,
    community_name varchar(100) not null,
    profile_img varchar(200) not null,
    nb_followers int not null default 0,
    nb_likes int not null default 0
);

CREATE TABLE IF NOT EXISTS ARTICLE(
    id int primary key AUTO_INCREMENT,
    author int not null,
    community int not null,
    title varchar(100) not null,
    article_description varchar(255) not null,
    date_time datetime not null,
    article_img varchar(200),
    nb_comments int not null default 0,
    nb_likes int not null default 0,
    nb_dislikes int not null default 0,
    content text not null,
    foreign key (author) references USER (id),
    foreign key (community) references COMMUNITY(id)
);

CREATE TABLE IF NOT EXISTS FIELD(
    field_name varchar(50) not null,
    article int not null,
    foreign key (article) references article(id),
    primary key (field_name , article)
);

CREATE TABLE IF NOT EXISTS USER_COMMUNITY(
    id_community int not null AUTO_INCREMENT,
    id_user int not null,
    foreign key (id_community) references community(id),
    foreign key(id_user) references user(id),
    primary key (id_community , id_user)
);

CREATE TABLE IF NOT EXISTS COMMENT(
    id int not null primary key AUTO_INCREMENT,
    article int not null,
    user int not null ,
    date_time datetime not null,
    comment_text varchar(255) not null,
    foreign key (user) references user(id),
    foreign key (article) references article(id)
);