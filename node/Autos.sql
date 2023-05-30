create database autos;

use autos;

create table auto(
id int not null auto_increment primary key,
marca VARCHAR(45) not null,
modelo VARCHAR(45) not null,
año int not null
);