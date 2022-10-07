DROP DATABASE IF EXISTS bearded_db;

CREATE DATABASE bearded_db;

USE bearded_db;

CREATE TABLE reviews (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    reviews_title VARCHAR(30)
    reviews_comments VARCHAR(10000)
);

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(30),
    description VARCHAR (10000)
);

