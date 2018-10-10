CREATE TABLE helo_user (
  user_ID SERIAL PRIMARY KEY,
  user_username VARCHAR(255),
  user_password VARCHAR(255),
  user_profile_pic VARCHAR(255)
);

INSERT INTO helo_user(user_username, user_password)
VALUES ($1, $2);

///////////////////////////////////////////////////////////



CREATE TABLE helo_posts (
  posts_id SERIAL PRIMARY KEY,
  posts_title VARCHAR (250),
  posts_image VARCHAR (250),
  posts_content VARCHAR (250),
  posts_author_id INTEGER REFERENCES helo_user(user_id)
);

INSERT INTO helo_posts( posts_title, posts_image, posts_content, posts_author_id )
VALUES('test5', 'test7', 'test4', 3)



INSERT INTO helo_posts( posts_title, posts_image, posts_content, posts_author_id )
VALUES('Death Note', 'https://www.animez.uk/ekmps/shops/animez/images/death-note-poster-group-1-465-p[ekm]269x400[ekm].jpg', 'About the show', 4),
('Javascript the hard part', 'https://static.frontendmasters.com/assets/courses/2018-01-22-javascript-hard-parts/thumb.jpg', 'More infomation on JS', 1),
('React StoryBook', 'https://cdn-images-1.medium.com/max/2000/1*Nk6CySl-Q-9EZbsn6sRxUg@2x.png2', 'React StoryBook code snipping',2),
('React + d3js ES6', 'https://s3.amazonaws.com/titlepages.leanpub.com/reactd3js/hero?1518064226', 'React+d3.js',1),
('JavaScript – React+D3v4', 'https://images-platform.99static.com/hrM9SJuRvGIOJk3Sku3CFN8nJxI=/0x600:2040x2640/fit-in/900x675/99designs-contests-attachments/85/85837/attachment_85837939', 'information about JavaScript – React+D3v4',4)

