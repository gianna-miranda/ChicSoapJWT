DROP DATABASE IF EXISTS ChicEcoBelle;
CREATE DATABASE ChicEcoBelle;
USE ChicEcoBelle;
--create customer table 
CREATE TABLE Customer(
customer_id INT PRIMARY KEY,
firstName varchar(50),
lastName varchar(50),
);
--insert the info 
INSERT  INTO Customer (firstName, lastName, username) 
VALUES  
('Gianna', 'Miranda', 'mInnIe-22'), 
('Lenny', 'Level', 'Lenny_123'), 
('Josh','Peck', 'Penny0909!!'), 
('John','Doe', 'joNy99!a'), 
('Mary', 'Fisher', 'Fisher!Mary1'),
 ('Shara', 'Shep', 'SS*ara1'), 
 ('Drake','Sir', '$irDrake00'), 
 ('Lacy','Jeffery', 'Lacee!J2'), 
 ('Mandy','Pecker', 'Pecker92!'), 
 ('Luke','Scott', 'lUkE!sCoTt09')
 ;
 --add emails 
 ALTER TABLE Customer 
 ADD email varchar(25);
UPDATE Customer  SET email = 'giannamir@yahoo.com' WHERE  customer_id = 1
UPDATE Customer  SET email = 'llenny123@gmail.com' WHERE  customer_id = 2
UPDATE Customer  SET email = 'Josh_peck99@gmail.com' WHERE  customer_id = 3
UPDATE Customer  SET email = 'John.doe@youtlook.com' WHERE  customer_id = 4
UPDATE Customer  SET email = 'mary1fisher2@hotmail.com' WHERE  customer_id = 5
UPDATE Customer  SET email = 'sssharasss@gmail.com' WHERE  customer_id = 6
UPDATE Customer  SET email = 'sir_drake@gmail.com' WHERE  customer_id = 7
UPDATE Customer  SET email = 'lacy99Jeff@gmail.com' WHERE  customer_id = 8
UPDATE Customer  SET email = 'mpecker45@yahoo.com' WHERE customer_id = 9
UPDATE Customer  SET email = 'mpecker45@yahoo.com' WHERE customer_id = 9


--create products table
CREATE TABLE Products
 ( product_id INTEGER PRIMARY KEY NOT NULL, 
 productName VARCHAR(20), 
 in_sctock INT NOT NULL, 
 product_type VARCHAR(20)  )

ALTER TABLE Products MODIFY COLUMN product_id INT auto_increment


-- products 
INSERT INTO Products (productName, in_sctock, product_type)  
VALUES  
('Activated Carbon ', 13, 'Soap'), 
('Aloe Vera Face Soap', 12, 'Soap'), 
('Coffee, Chocolate,& Orange', 12, 'Soap'), 
('Rosemary, Mint and Black Pepper', 10, 'Soap'), 
('Chakra Manipura', 13, 'Soap'), 
('Oatmeal and Honey ',12,'Soap'), 
('ALOE VERA Body ',10,'Soap'), 
('Rice and Lemon Beebrush ',11,'Soap'), 
('Holy Stick Soap',9,'Soap'), 
('Svadhisthana Chakra',11,'Soap'), 
('Milk Soap', 12, 'Soap')

--price table
CREATE TABLE Price
 (originalPrice DECIMAL(2,2) NOT NULL,
  salePrice DECIMAL(2,2) NOT NULL, 
  locationCode INT NOT NULL, 
  effectiveDate INT NOT NULL)
  
  
  
  
  
  
  
  ------ 
DROP DATABASE IF EXISTS soap_shop;
CREATE DATABASE soap_shop;
USE soap_shop;

CREATE TABLE products(
  product_id INT AUTO_INCREMENT NOT NULL,
  product_title VARCHAR(45) NOT NULL,
  product_image VARCHAR(75) NOT NULL,
  primary key(product_id)
);
SELECT * FROM products;
INSERT INTO products (product_title, product_image)
VALUES 
('SPIRULINA ROMERO AND MINT SOAP', 'image/images/IMG_2568.jpg'),
('SPIRULINA ROMERO AND MINT SOAP', 'image/images/IMG_2568.jpg'),
('SPIRULINA ROMERO AND MINT SOAP', 'image/images/IMG_2568.jpg'),
('SPIRULINA ROMERO AND MINT SOAP', 'image/images/IMG_2568.jpg'),
('SPIRULINA ROMERO AND MINT SOAP', 'image/images/IMG_2568.jpg'),
('SPIRULINA ROMERO AND MINT SOAP', 'image/images/IMG_2568.jpg'),
('SPIRULINA ROMERO AND MINT SOAP', 'image/images/IMG_2568.jpg'),
('SPIRULINA ROMERO AND MINT SOAP', 'image/images/IMG_2568.jpg'),
('SPIRULINA ROMERO AND MINT SOAP', 'image/images/IMG_2568.jpg'),
('SPIRULINA ROMERO AND MINT SOAP', 'image/images/IMG_2568.jpg'),
('SPIRULINA ROMERO AND MINT SOAP', 'image/images/IMG_2568.jpg'),
('SPIRULINA ROMERO AND MINT SOAP', 'image/images/IMG_2568.jpg');



CREATE TABLE products_price(
    product_id INT AUTO_INCREMENT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    primary key(product_id)
);

INSERT INTO products_price (price)
VALUES
(10.99),
(9.99),
(11.99),
(14.99),
(9.99),
(10.99),
(7.99),
(8.99),
(9.99),
(13.99),
(11.99);


SELECT product_price.product_id,  product_price.price FROM product_price INNER JOIN products ON products_price.products_id = products.product_id
GROUP BY product_id;


-- con.connect(function(err) {
--   if (err) throw err;
--   var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
--   con.query(sql, function (err, result) {
--     if (err) throw err;
--     console.log(result);
--   });
-- });