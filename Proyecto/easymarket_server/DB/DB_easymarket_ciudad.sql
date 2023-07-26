ALTER TABLE easy_market.tb_ciudad AUTO_INCREMENT = 0;

INSERT INTO tb_ciudad (nombre_ciudad, cobertura)
VALUES ('Cali', 1);

INSERT INTO tb_ciudad(nombre_ciudad,cobertura)
VALUES ('Medellin', 1);

INSERT INTO tb_ciudad(nombre_ciudad,cobertura)
VALUES ('Bogotá', 1);

INSERT INTO tb_ciudad(nombre_ciudad,cobertura)
VALUES ('Cartagena', 1);


SELECT * FROM easy_market.tb_ciudad;




/*
DELETE FROM ciudad WHERE id_ciudad= 3;
ALTER TABLE tb_ciudad AUTO_INCREMENT = 1;
ALTER TABLE tb_ciudad MODIFY id_ciudad int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY, AUTO_INCREMENT=0;
*/

-- CALL consultaCiudad;
