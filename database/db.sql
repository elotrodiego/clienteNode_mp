CREATE DATABASE musicpro;

USE musicpro;

CREATE TABLE usuario(
    id_user INT(5) AUTO_INCREMENT,
    nombre VARCHAR(128) NOT NULL,
    apellido VARCHAR(128) NOT NULL,
    rut VARCHAR(20) NOT NULL,
    email VARCHAR(128) NOT NULL,
    contrasena VARCHAR(128) NOT NULL,
    tipo_permiso CHAR(1) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE producto(
    id INT(5) AUTO_INCREMENT,
    nombre VARCHAR(128) NOT NULL,
    codigo INT(8) NOT NULL,
    valor INT(8) NOT NULL,
    foto VARCHAR(600) NOT NULL,
    oferta INT(5) NOT NULL,
    categoria CHAR(1) NOT NULL,
    descripcion VARCHAR(300),
    PRIMARY KEY(id)
);

SHOW TABLES;

describe usuario;
