DROP DATABASE IF EXISTS SmartKart;
CREATE DATABASE IF NOT EXISTS SmartKart;

Use SmartKart;

CREATE TABLE Customer
(
	CustomerID INT(2) PRIMARY KEY,
    FName	VARCHAR(15),
    LName	VARCHAR(20),
    email VARCHAR(30),
    pass VARCHAR(20),
    org VARCHAR(20)
);

INSERT INTO Customer VALUES(1, 'testUser', 'testUser', 'test@gmail.com', 'test', 'customer');
INSERT INTO Customer VALUES(2, 'Tom', 'Holland', 'tomHolland@gmail.com', 'password123', 'customer');
INSERT INTO Customer VALUES(3, 'Tom', 'Hanks', 'tomHanks@gmail.com', 'password123', 'customer');
INSERT INTO Customer VALUES(4, 'Tom', 'Brady', 'tomBrady@gmail.com', 'password123', 'customer');
INSERT INTO Customer VALUES(5, 'Tom', 'Cruise', 'tomCruise@gmail.com', 'password123', 'customer');

CREATE TABLE CustomerService
(
	CustomerServiceID INT(2) PRIMARY KEY,
    FName VARCHAR(15),
    LName VARCHAR(20),
    email VARCHAR(30),
    pass VARCHAR(20),
    phoneNumber INT(12),
    org VARCHAR(20)
);

INSERT INTO CustomerService VALUES(1, 'Ashma', 'Manandhar', 'amanandh@hawk.iit.edu', 'password123', '1231231234', "customerservice");
INSERT INTO CustomerService VALUES(2, 'Aurangzeb', 'Razzaq', 'arazzaq@hawk.iit.edu', 'password123', '1231231234', "customerservice");
INSERT INTO CustomerService VALUES(3, 'Darsh', 'Patel', 'dpatel137@hawk.iit.edu', 'password123', '1231231234', "customerservice");
INSERT INTO CustomerService VALUES(4, 'Kajal', 'Patel', 'kpatel115@hawk.iit.edu', 'password123', '1231231234', "customerservice");
INSERT INTO CustomerService VALUES(5, 'Ramzee', 'Christiel', 'rchristiel@hawk.iit.edu', 'password123', '1231231234', "customerservice");


CREATE TABLE Admin
(
	AdminID INT(2) PRIMARY KEY,
    email VARCHAR(30),
    pass VARCHAR(20),
    phoneNumber INT(12),
    org VARCHAR(20)
);

INSERT INTO Admin VALUES(1, 'admin@gmail.com', 'admin123', '1231231234', 'admin');