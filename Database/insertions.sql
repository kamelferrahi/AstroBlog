use astroblog_db;
insert into user (email , fullname , is_admin , profile_pic , category , user_password , nb_publications) values ("jm_touahriamiliani@esi.dz" , "Touahria Miliani Mohamed Yacine" , 1 , "1389abb66624d55e38a3caed016dfd7c" , "esi_student" , "$2b$10$IDUWltNKpyWA4OKcXuq0a.sOvbufXd/FuJJFRRlZafWUFbcFNXDva" , 1);
insert into community (community_name, profile_img,nb_followers) values("Iot Community" , "1389abb66624d55e38a3caed016dfd7c", 1);
insert into article (author ,community, title , article_description, date_time , article_img , content) values ( 1 ,1, "Bonjour tous le monde","this is my description" , "2023-07-17 01:57:33","1389abb66624d55e38a3caed016dfd7c", "hello! this is a markdown language");
insert into field values ("astronomy",1),("sky",1);
insert into USER_COMMUNITY values (1,1);