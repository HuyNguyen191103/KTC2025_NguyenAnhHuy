-- create database customer_management;

create table customer_management.customers (
    id int not null auto_increment,
    name varchar(45) default null,
    phone varchar(10) default null,
    email varchar(45) default null,
    address varchar(45) default null,
    primary key (id)
);

insert into customer_management.customers(name, phone, email, address) values
('Ty', '0909030405', 'ty@gmail.com', '21K NVT'),
('Teo', '0909030405', 'teo@gmail.com', '21K NVT'),
('To', '0909030405', 'to@gmail.com', '21K NVT'),
('Bin', '0909030405','bin@gmail.com', '21K NVT'),
('Bo', '0909030405', 'bo@gmail.com', '21K NVT')
;