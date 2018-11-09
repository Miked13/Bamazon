-- Drop the bamazon_db if it already exists.
DROP DATABASE IF EXISTS bamazon_db;

-- Create database called "bamazon_db" --
CREATE DATABASE bamazon_db;

use bamazon_db;
-- Create the table "products" within bamazon_db --
CREATE TABLE products(
    -- Columns added to the table "prducts" --
    item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(45) NOT NULL,
    department_name VARCHAR(45) NOT NULL,
    price INTEGER(255) NOT NULL,
    stock_quantity INTEGER(100) NOT NULL,
    PRIMARY KEY (item_id)
);

-- Creates new rows
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Iphone XS", "Electronics", 999, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Red Dead Redemption 2", "Video Games", 60, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("A Song Of Ice and Fire", "Books", 30, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Occulus Rift", "VR headset", 500, 4);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Tuxedos", "Clothing", 845, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Google Pixel 3", "Electronics", 850, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Monopoly", "Board Games", 20, 4);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Mac Pro", "Personal Computers", 5200, 2);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Necklace", "Jewelry", 2500, 1);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Playstation 4", "Gaming Console", 300, 5);