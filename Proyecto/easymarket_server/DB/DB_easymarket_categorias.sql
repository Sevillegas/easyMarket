ALTER TABLE easy_market.tb_categorias AUTO_INCREMENT = 0;



INSERT INTO tb_categorias (nombre_categoria, descripcion, estado)
VALUES ('Tecnologia', 'Productos tecnologicos', 1);

INSERT INTO tb_categorias (nombre_categoria, descripcion, estado)
VALUES ('Hogar', 'Productos para la casa', 1);

INSERT INTO tb_categorias (nombre_categoria, descripcion, estado)
VALUES ('Moda y accesorios', 'Productos ropa, calzado y accesorios personales', 1);



SELECT * FROM easy_market.tb_categorias;