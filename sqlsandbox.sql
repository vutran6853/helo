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
  posts_image VARCHAR (50),
  posts_content VARCHAR (50),
  posts_author_id INTEGER REFERENCES helo_user(user_id)
);

INSERT INTO helo_posts( posts_title, posts_image, posts_content, posts_author_id )
VALUES('test5', 'test7', 'test4', 3)



