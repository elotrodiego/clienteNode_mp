CREATE DATABASE musicpro;

USE musicpro;

CREATE TABLE usuario(
    id INT(5) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(128) NOT NULL,
    apellido VARCHAR(128) NOT NULL,
    rut VARCHAR(20) NOT NULL,
    correo VARCHAR(128) NOT NULL,
    contraseña VARCHAR(128) NOT NULL,
    tipo_permiso CHAR(1) NOT NULL  
);

SHOW TABLES;

describe usuario;
