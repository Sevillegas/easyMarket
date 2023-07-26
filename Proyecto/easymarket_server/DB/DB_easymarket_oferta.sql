ALTER TABLE easy_market.tb_oferta AUTO_INCREMENT = 0;



INSERT INTO tb_oferta (nombre_oferta, descripcion, estado, fecha_inicio, fecha_fin)
VALUES ('full','Sin oferta', 0, DATE("2023-01-01"), DATE("2024-01-01"));

INSERT INTO tb_oferta (nombre_oferta, descripcion, estado, fecha_inicio, fecha_fin)
VALUES ('-10%','Descuento del 10%', 1, DATE("2023-07-01"), DATE("2023-08-01"));

INSERT INTO tb_oferta (nombre_oferta, descripcion, estado, fecha_inicio, fecha_fin)
VALUES ('-50%','Descuento de la mitad del precio', 1 , DATE("2023-07-10"), DATE("2023-07-20"));

INSERT INTO tb_oferta (nombre_oferta, descripcion, estado, fecha_inicio, fecha_fin)
VALUES ('-100%','Descuento del total del producto', 1,  DATE("2023-07-01"), DATE("2023-07-30"));



SELECT * FROM easy_market.tb_oferta;