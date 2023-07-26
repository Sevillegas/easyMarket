ALTER TABLE easy_market.tb_productos AUTO_INCREMENT = 0;


-- Tecnologia


INSERT INTO tb_productos (descripcion_producto, id_categoria, precio, cantidad, id_oferta)
VALUES ('Televisor 4k', 1, 1600000, 2, 1);

INSERT INTO tb_productos (descripcion_producto, id_categoria, precio, cantidad, id_oferta)
VALUES ('Televisor FULLHD', 1, 900000, 1, 2);

INSERT INTO tb_productos (descripcion_producto, id_categoria, precio, cantidad, id_oferta)
VALUES ('Mouse', 1, 90000, 99, 3);

INSERT INTO tb_productos (descripcion_producto, id_categoria, precio, cantidad, id_oferta)
VALUES ('Disco SSD 1TB', 1, 860000, 5, 1);

INSERT INTO tb_productos (descripcion_producto, id_categoria, precio, cantidad, id_oferta)
VALUES ('Tablet 10"', 1, 1180000, 5, 1);

INSERT INTO tb_productos (descripcion_producto, id_categoria, precio, cantidad, id_oferta)
VALUES ('Computador portatil Gamer', 1, 2200000, 2, 1);



-- Hogar


INSERT INTO tb_productos (descripcion_producto, id_categoria, precio, cantidad, id_oferta)
VALUES ('Espatula para mezclar', 2, 24000, 2, 1);

INSERT INTO tb_productos (descripcion_producto, id_categoria, precio, cantidad, id_oferta)
VALUES ('Bateria de ollas', 2, 232000, 1, 2);

INSERT INTO tb_productos (descripcion_producto, id_categoria, precio, cantidad, id_oferta)
VALUES ('Sarten antiadherente ', 2, 120000, 4, 3);

INSERT INTO tb_productos (descripcion_producto, id_categoria, precio, cantidad, id_oferta)
VALUES ('Batidora de mano', 2, 69000, 5, 2);

INSERT INTO tb_productos (descripcion_producto, id_categoria, precio, cantidad, id_oferta)
VALUES ('Estante de almacenamiento', 2, 315000, 5, 1);

INSERT INTO tb_productos (descripcion_producto, id_categoria, precio, cantidad, id_oferta)
VALUES ('Set 4 sillas', 2, 345000, 2, 1);

INSERT INTO tb_productos (descripcion_producto, id_categoria, precio, cantidad, id_oferta)
VALUES ('Comedor 6 puestos', 2, 1156000, 2, 1);

INSERT INTO tb_productos (descripcion_producto, id_categoria, precio, cantidad, id_oferta)
VALUES ('Espejo grande', 2, 78000, 2, 1);


-- Moda


INSERT INTO tb_productos (descripcion_producto, id_categoria, precio, cantidad, id_oferta)
VALUES ('Tenis Hombre', 3, 160000, 10, 1);

INSERT INTO tb_productos (descripcion_producto, id_categoria, precio, cantidad, id_oferta)
VALUES ('Chaqueta blazer', 3, 268000, 7, 1);

INSERT INTO tb_productos (descripcion_producto, id_categoria, precio, cantidad, id_oferta)
VALUES ('Polo hombre', 3, 90000, 5, 2);

INSERT INTO tb_productos (descripcion_producto, id_categoria, precio, cantidad, id_oferta)
VALUES ('Sandalia', 3, 34000, 50, 1);

INSERT INTO tb_productos (descripcion_producto, id_categoria, precio, cantidad, id_oferta)
VALUES ('Jeans ajustados', 3, 99000, 99, 1);

INSERT INTO tb_productos (descripcion_producto, id_categoria, precio, cantidad, id_oferta)
VALUES ('Vestido de baño', 3, 134000, 3, 1);






SELECT * FROM easy_market.tb_productos;

