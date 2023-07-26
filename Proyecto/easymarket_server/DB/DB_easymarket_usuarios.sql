
INSERT INTO tb_usuarios(id_usuario,nombre_usuario,id_ciudad,direccion,rol,id_refiere,estado,contraseña_usuario,correo_usuario,telefono_usuario)
VALUES (1144193023, 'Brayan Cano Garcia', 1, 'av 3ra norte #1a-134', 1, 123456789, 1, 'pass12345', 'brayan_10@hotmail.com', 3192181415);

INSERT INTO tb_usuarios(id_usuario,nombre_usuario,id_ciudad,direccion,rol,id_refiere,estado,contraseña_usuario,correo_usuario,telefono_usuario)
VALUES (1144567890, 'Margarita Rosa Peña', 2, 'calle 27, transversal 11-52', 2, 0, 1, 'pass1234', 'mailMRP@gmail.com', 3154028171);

INSERT INTO tb_usuarios(id_usuario,nombre_usuario,id_ciudad,direccion,rol,id_refiere,estado,contraseña_usuario,correo_usuario,telefono_usuario)
VALUES (11567890, 'Francisco de Jesus', 2, 'carrera 1ra 62b norte', 2, 1144193023, 1, 'pass123456', 'correoFDJ@yahoo.com', 3197654439);

INSERT INTO tb_usuarios(id_usuario,nombre_usuario,id_ciudad,direccion,rol,id_refiere,estado,contraseña_usuario,correo_usuario,telefono_usuario)
VALUES (1133567654, 'Maria Madrigal', 4, 'av los alamos, cr 2da 45H-322 apto 4c12', 2, 0, 1, 'pass123489', 'Madrigal_maria@outlook.com', 3154928139);

INSERT INTO tb_usuarios(id_usuario,nombre_usuario,id_ciudad,direccion,rol,id_refiere,estado,contraseña_usuario,correo_usuario,telefono_usuario)
VALUES (31961363, 'Alberto de jesus', 3, 'av siempreviva 123', 2, 0, 1, 'alber1234', 'alberto@outlook.com', 3196755432);


SELECT * FROM easy_market.tb_usuarios;

CALL validateAuthentication("wonder@mail.com", "brayan1345");








/*
SELECT * FROM usuarios
WHERE id_ciudad =  1;

SELECT * FROM usuarios
WHERE correo_usuario like '%@correomail.com%' AND rol=1;

SELECT * FROM usuarios
WHERE nombre_usuario like '%Maria%' OR nombre_usuario like '%Francisco%';

SELECT * FROM usuarios
WHERE nombre_usuario in ('Margarita Rosa Peña','Brayan Cano Garcia');

SELECT COUNT(id_ciudad) AS cantidad_ciudad, id_ciudad  FROM usuarios
group by id_ciudad
order by id_ciudad DESC;
SELECT * FROM usuarios;

SELECT tb_usuarios.nombre_usuario as usuario, tb_ciudad.nombre_ciudad as ciudad
FROM easy_market.tb_usuarios 
JOIN tb_ciudad on tb_usuarios.id_ciudad = tb_ciudad.id_ciudad;
*/
