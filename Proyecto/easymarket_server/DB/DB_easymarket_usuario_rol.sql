SELECT * FROM easy_market.tb_usuario_rol;

INSERT INTO tb_usuario_rol 
SELECT id_usuario as usuario, tb_rol.id_rol as rol 
FROM tb_usuarios 
JOIN tb_rol on tb_usuarios.rol = tb_rol.id_rol;

/*
SELECT tb_usuarios.id_usuario as usuarioID, tb_rol.nombre as rol 
FROM  easy_market.tb_usuarios 
JOIN tb_rol on tb_usuarios.rol = tb_rol.id_rol;
*/