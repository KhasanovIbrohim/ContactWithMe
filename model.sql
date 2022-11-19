CREATE TABLE users(
    user_id serial PRIMARY KEY,
    user_name VARCHAR(64) not null,
    user_email VARCHAR(64) not null,
    user_phone VARCHAR(64) not null,
    user_text text not null
);

SELECT * FROM users;

INSERT INTO users(user_name, user_email, user_phone, user_text) VALUES('Ibrohim', 'ibrohimdev01@gmail.com', '972658001', 'Salom');