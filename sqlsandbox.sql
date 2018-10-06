CREATE TABLE user (
  user_ID SERIAL PRIMARY KEY,
  user_username VARCHAR(255),
  user_password VARCHAR(255),
  user_profile_pic TEXT(255),
);

CREATE TABLE helo_posts (
  posts_id SERIAL PRIMARY KEY,
  posts_title VARCHAR (250),
  posts_image VARCHAR (50),
  posts_contend VARCHAR (50),
  posts_author_id INTEGER REFERENCES helo_user(user_id)
);

