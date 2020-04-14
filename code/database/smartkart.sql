DROP DATABASE IF EXISTS SmartKart;
CREATE DATABASE IF NOT EXISTS SmartKart;

Use SmartKart;

CREATE TABLE Customer
(
	CustomerID INT(2) NOT NULL PRIMARY KEY,
    FName	VARCHAR(15),
    LName	VARCHAR(20),
    email VARCHAR(30),
    password VARCHAR(20),
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
    password VARCHAR(20),
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
    password VARCHAR(20),
    phoneNumber INT(12),
    org VARCHAR(20)
);

INSERT INTO Admin VALUES(1, 'admin@gmail.com', 'admin123', '1231231234', 'admin');

CREATE TABLE Purchase
(
	PurchaseID INT(2) PRIMARY KEY,
    email VARCHAR(30),
    cheetos INT(2),
    steak INT (2),
    milk INT (2),
);

INSERT INTO Purchase VALUES(1, 'test@gmail.com', 0, 0, 0);

/*
INSERT INTO Customer VALUES(7, 'user7first', 'user7last');
INSERT INTO Customer VALUES(8, 'user8first', 'user8last');
INSERT INTO Customer VALUES(9, 'user9first', 'user9last');
INSERT INTO Customer VALUES(10, 'user10first', 'user10last');
INSERT INTO Customer VALUES(11, 'user11first', 'user11last');
INSERT INTO Customer VALUES(12, 'user12first', 'user12last');
INSERT INTO Customer VALUES(13, 'user13first', 'user13last');
INSERT INTO Customer VALUES(14, 'user14first', 'user14last');
INSERT INTO Customer VALUES(15, 'user15first', 'user15last');


CREATE TABLE Orders
(
	OrderId 	INT(2) 	PRIMARY KEY,
    OrderDate 	date,
    HeadquartersId	INT(2)
);

INSERT INTO Orders VALUES(1, '2020-02-1', 101);
INSERT INTO Orders VALUES(2, '2020-02-2', 102);
INSERT INTO Orders VALUES(3, '2020-02-3', 103);
INSERT INTO Orders VALUES(4, '2020-02-4', 104);
INSERT INTO Orders VALUES(5, '2020-02-5', 105);
INSERT INTO Orders VALUES(6, '2020-02-6', 106);
INSERT INTO Orders VALUES(7, '2020-02-7', 107);
INSERT INTO Orders VALUES(8, '2020-02-8', 108);
INSERT INTO Orders VALUES(9, '2020-02-9', 109);
INSERT INTO Orders VALUES(10, '2020-02-10', 110);
INSERT INTO Orders VALUES(11, '2020-02-11', 111);
INSERT INTO Orders VALUES(12, '2020-02-12', 112);
INSERT INTO Orders VALUES(13, '2020-02-13', 113);
INSERT INTO Orders VALUES(14, '2020-02-14', 114);
INSERT INTO Orders VALUES(15, '2020-02-15', 115);

CREATE TABLE OrderDetail
(
	OrderDetailId	INT(2)	PRIMARY KEY,
    ProductId		INT(2),
    OrderId			INT(2),
    ProductQuantity	INT(4)
);

INSERT INTO OrderDetail VALUES(1, 201, 1, 5);
INSERT INTO OrderDetail VALUES(2, 202, 2, 10);
INSERT INTO OrderDetail VALUES(3, 203, 3, 15);
INSERT INTO OrderDetail VALUES(4, 204, 4, 15);
INSERT INTO OrderDetail VALUES(5, 205, 5, 10);
INSERT INTO OrderDetail VALUES(6, 206, 6, 10);
INSERT INTO OrderDetail VALUES(7, 207, 7, 15);
INSERT INTO OrderDetail VALUES(8, 208, 8, 20);
INSERT INTO OrderDetail VALUES(9, 209, 9, 5);
INSERT INTO OrderDetail VALUES(10, 210, 10, 10);
INSERT INTO OrderDetail VALUES(11, 211, 11, 15);
INSERT INTO OrderDetail VALUES(12, 212, 12, 5);
INSERT INTO OrderDetail VALUES(13, 213, 13, 10);
INSERT INTO OrderDetail VALUES(14, 214, 14, 15);
INSERT INTO OrderDetail VALUES(15, 215, 15, 5);

CREATE TABLE Product
(
	ProductId			INT(2) PRIMARY KEY,
    ProductDescription	VARCHAR(100),
    OrderId				INT(2),
    ProductQuantity		INT(4)
);

INSERT INTO Product VALUES(201, 'description', 1, 5);
INSERT INTO Product VALUES(202, 'description', 2, 10);
INSERT INTO Product VALUES(203, 'description', 3, 15);
INSERT INTO Product VALUES(204, 'description', 4, 15);
INSERT INTO Product VALUES(205, 'description', 5, 10);
INSERT INTO Product VALUES(206, 'description', 6, 10);
INSERT INTO Product VALUES(207, 'description', 7, 15);
INSERT INTO Product VALUES(208, 'description', 8, 20);
INSERT INTO Product VALUES(209, 'description', 9, 5);
INSERT INTO Product VALUES(210, 'description', 10, 10);
INSERT INTO Product VALUES(211, 'description', 11, 15);
INSERT INTO Product VALUES(212, 'description', 12, 5);
INSERT INTO Product VALUES(213, 'description', 13, 10);
INSERT INTO Product VALUES(214, 'description', 14, 15);
INSERT INTO Product VALUES(215, 'description', 15, 5);

CREATE TABLE OrderDetailDelivery
(
	DeliveryId		INT(2)  PRIMARY KEY,
    OrderId			INT(2),
    OrderDetailId	INT(2)
);

INSERT INTO OrderDetailDelivery VALUES(401, 1, 11);
INSERT INTO OrderDetailDelivery VALUES(402, 2, 12);
INSERT INTO OrderDetailDelivery VALUES(403, 3, 13);
INSERT INTO OrderDetailDelivery VALUES(404, 4, 14);
INSERT INTO OrderDetailDelivery VALUES(405, 5, 15);
INSERT INTO OrderDetailDelivery VALUES(406, 6, 16);
INSERT INTO OrderDetailDelivery VALUES(407, 7, 17);
INSERT INTO OrderDetailDelivery VALUES(408, 8, 18);
INSERT INTO OrderDetailDelivery VALUES(409, 9, 19);
INSERT INTO OrderDetailDelivery VALUES(410, 10, 20);
INSERT INTO OrderDetailDelivery VALUES(411, 11, 21);
INSERT INTO OrderDetailDelivery VALUES(412, 12, 22);
INSERT INTO OrderDetailDelivery VALUES(413, 13, 23);
INSERT INTO OrderDetailDelivery VALUES(414, 14, 24);
INSERT INTO OrderDetailDelivery VALUES(415, 15, 25);

CREATE TABLE StoreAssociate
(
	StoreAssociateId	INT(2),
    BranchId			INT(2)
);

INSERT INTO StoreAssociate VALUES(121, 501);
INSERT INTO StoreAssociate VALUES(122, 502);
INSERT INTO StoreAssociate VALUES(123, 503);
INSERT INTO StoreAssociate VALUES(124, 504);
INSERT INTO StoreAssociate VALUES(125, 505);
INSERT INTO StoreAssociate VALUES(126, 506);
INSERT INTO StoreAssociate VALUES(127, 507);
INSERT INTO StoreAssociate VALUES(128, 508);
INSERT INTO StoreAssociate VALUES(129, 509);
INSERT INTO StoreAssociate VALUES(130, 510);
INSERT INTO StoreAssociate VALUES(131, 511);
INSERT INTO StoreAssociate VALUES(132, 512);
INSERT INTO StoreAssociate VALUES(133, 513);
INSERT INTO StoreAssociate VALUES(134, 514);
INSERT INTO StoreAssociate VALUES(135, 515);

CREATE TABLE Branch
(
	BranchId	INT(2)
);

INSERT INTO Branch VALUES(901);

CREATE TABLE Delivery
(
	DeliveryId		INT(2),
    DeliveryDate	date,
	SupplierId		INT(2)
);

INSERT INTO Delivery VALUES(1, '2020-03-1', 301);
INSERT INTO Delivery VALUES(2, '2020-03-2', 302);
INSERT INTO Delivery VALUES(3, '2020-03-3', 303);
INSERT INTO Delivery VALUES(4, '2020-03-4', 304);
INSERT INTO Delivery VALUES(5, '2020-03-5', 305);
INSERT INTO Delivery VALUES(6, '2020-03-6', 306);
INSERT INTO Delivery VALUES(7, '2020-03-7', 307);
INSERT INTO Delivery VALUES(8, '2020-03-8', 308);
INSERT INTO Delivery VALUES(9, '2020-03-9', 309);
INSERT INTO Delivery VALUES(10, '2020-03-10', 310);
INSERT INTO Delivery VALUES(11, '2020-03-11', 311);
INSERT INTO Delivery VALUES(12, '2020-03-12', 312);
INSERT INTO Delivery VALUES(13, '2020-03-13', 313);
INSERT INTO Delivery VALUES(14, '2020-03-14', 314);
INSERT INTO Delivery VALUES(15, '2020-03-15', 315);
*/
-- SELECT * FROM Customer;
-- SELECT * FROM Orders;
-- SELECT * FROM OrderDetail;
-- SELECT * FROM Product;
-- SELECT * FROM OrderDetailDelivery;
-- SELECT * FROM StoreAssociate;
-- SELECT * FROM Branch;
-- SELECT * FROM Delivery;
