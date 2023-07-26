-- SHOW DATABASES;
USE easy_market;

CREATE TABLE IF NOT EXISTS tb_ciudad (
id_ciudad INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre_ciudad VARCHAR(45),
cobertura BIT
);


CREATE TABLE IF NOT EXISTS tb_pedido (
id_pedido INT(4) AUTO_INCREMENT NOT NULL PRIMARY KEY,
fecha_pago DATE,
metodo_pago VARCHAR(45),
estado VARCHAR(40)
);


CREATE TABLE IF NOT EXISTS tb_categorias (
id_categoria INT(4) auto_increment NOT NULL PRIMARY KEY,
nombre_categoria VARCHAR(45),
descripcion VARCHAR(100),
estado BIT
);


CREATE TABLE IF NOT EXISTS tb_rol (
id_rol INT NOT NULL auto_increment PRIMARY KEY,
descripcion VARCHAR(45),
nombre VARCHAR(45)
);


CREATE TABLE IF NOT EXISTS tb_usuarios (
id_usuario INT(10) NOT NULL,
nombre_usuario VARCHAR(60) NOT NULL,
id_ciudad INT(10),
direccion VARCHAR(50),
rol INT(3),
id_refiere INT(10),
estado BIT,
contraseña_usuario VARCHAR(60) NOT NULL, 
correo_usuario VARCHAR(45) NOT NULL,
telefono_usuario BIGINT(10),

CONSTRAINT pk_easy_market_id_usuario PRIMARY KEY  (id_usuario, id_refiere),
CONSTRAINT fk_easy_market_id_usuario_ciudad FOREIGN KEY (id_ciudad) REFERENCES tb_ciudad(id_ciudad),
CONSTRAINT fk_easy_market_id_usuario_rol FOREIGN KEY (rol) REFERENCES tb_rol(id_rol)
);


CREATE TABLE IF NOT EXISTS tb_usuario_rol (
id_usuario INT ,
id_rol INT,

CONSTRAINT pk_easy_market_usuario_rol PRIMARY KEY  (id_usuario, id_rol),

CONSTRAINT fk_easy_market_id_usuario FOREIGN KEY (id_usuario) REFERENCES tb_usuarios(id_usuario),
CONSTRAINT fk_easy_market_id_rol FOREIGN KEY (id_rol) REFERENCES tb_rol(id_rol)
);

CREATE TABLE IF NOT EXISTS tb_oferta (
id_oferta INT PRIMARY KEY auto_increment,
nombre_oferta VARCHAR(45),
descripcion VARCHAR(45),
estado BIT,
fecha_inicio DATE,
fecha_fin DATE
);


CREATE TABLE IF NOT EXISTS tb_productos (
id_producto INT NOT NULL auto_increment,
descripcion_producto VARCHAR(45),
id_categoria INT(4),
precio INT,
cantidad INT(4),
id_oferta INT,

CONSTRAINT pk_easy_market_id_producto PRIMARY KEY  (id_producto, id_oferta),

CONSTRAINT fk_easy_market_id_categoria FOREIGN KEY (id_categoria) REFERENCES tb_categorias(id_categoria),
CONSTRAINT fk_easy_market_id_producto_ferta FOREIGN KEY (id_oferta) REFERENCES tb_oferta(id_oferta)
);


CREATE TABLE IF NOT EXISTS tb_carrito (
id_carrito INT NOT NULL auto_increment PRIMARY KEY,
id_usuario INT(10),
id_producto INT,
estado BIT,
id_pedido INT,

CONSTRAINT fk_easy_market_id_producto_carrito FOREIGN KEY (id_producto) REFERENCES tb_productos(id_producto),
CONSTRAINT fk_easy_market_id_pedido FOREIGN KEY (id_pedido) REFERENCES tb_pedido(id_pedido),
CONSTRAINT fk_easy_market_id_usuario_carrito FOREIGN KEY (id_usuario) REFERENCES tb_usuarios(id_usuario)
);




-- ALTER USER  'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Midnightsun96.' ;
-- flush privileges;
-- ALTER TABLE tb_productos
-- MODIFY COLUMN id_producto INT NOT NULL auto_increment;
-- ADD COLUMN estado CHAR(1);
-- DROP COLUMN estado;

/*
drop table if exists tb_carrito;
drop table if exists tb_oferta;
drop table if exists tb_productos;
drop table if exists tb_usuario_rol;
drop table if exists tb_usuarios;
drop table if exists tb_rol;
drop table if exists tb_categorias;
drop table if exists tb_pedido;
drop table if exists tb_ciudad;
*/

/*
truncate table carrito;
truncate table oferta;
truncate table productos;
truncate table usuario_rol;
truncate table usuarios;
truncate table rol;
truncate table categorias;
truncate table pedido;
truncate table ciudad;
*/

