const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

//Conexion base de datos
const { connection } = require("../config.db");


//Metodos GET, POST, DELETE 

app.param(['userid'], function (req, res, next, value) {
    console.log('parametro leido', value)
    next()
  })



const getUser = (request, response) => {

    const id = request.params.id;

    connection.query("CALL getUser(?)", [id],
        (error, results) => {
            if (error)
                throw error;
            response.status(200).json(results[0]);
        });
};


const getCiudad = (request, response) => {

    const id = request.params.id;

    connection.query("CALL getCity(?)", [id],
        (error, results) => {
            if (error)
                throw error;
            response.status(200).json(results[0]);
        });
};

const postUser = (request, response) => {

    const {id_usuario, nombre_usuario, id_ciudad, direccion, rol, id_refiere, estado, contraseña_usuario, correo_usuario, telefono_usuario} = request.body;
    connection.query("CALL createUser(?,?,?,?,?,?,?,?,?,?)",
        [id_usuario, nombre_usuario, id_ciudad, direccion, rol, id_refiere, estado.type == "BIT", contraseña_usuario, correo_usuario, telefono_usuario],
        (error, results) => {
            if (error) throw error;
            response.status(201).json({"datos creados correctamente" : results});           
        });

};


const putUser = (request, response) => {
    const {nombre_usuario, id_ciudad, direccion, rol, id_refiere, estado, contraseña_usuario, correo_usuario, telefono_usuario, id_usuario} = request.body;
    connection.query("CALL updateUser(?,?,?,?,?,?,?,?,?,?)",
        [nombre_usuario, id_ciudad, direccion, rol, id_refiere, estado .type == "BIT", contraseña_usuario, correo_usuario, telefono_usuario, id_usuario],
        (error, results) => {
            if (error) throw error;
            response.status(201).json({ "datos actualizados correctamente" : results.affectedRows});
        });
};


const delUser = (request, response) => {
    const id = request.params.id;
    connection.query("CALL deleteUser(?)",
        [id],
        (error, results) => {
            if (error) throw error;
            response.status(200).json({ "datos eliminados exitosamente": results.affectedRows });
        });
};


app.route("/user/:id").delete(delUser);
app.route("/user/:id").get(getUser);
app.route("/user/ciudad/:id").get(getCiudad);
app.route("/user").post(postUser);
app.route("/user").put(putUser);


module.exports = app;


/*


{
    "id_usuario": 30930363
}



{
    "id_usuario": 30930363,
    "nombre_usuario": "Katherine Mora",
    "id_ciudad": 3,
    "direccion": "av siempreviva 123",
    "rol": 2,
    "id_refiere": 0,
    "estado": true,
    "contraseña_usuario": "monitoslocos27",
    "correo_usuario": "katerine_O.O@gmail.com",
    "telefono_usuario": 3294568709
}


{
    "nombre_usuario": "Katherine Mora Morales",
    "id_ciudad": 3,
    "direccion": "av nuncajamas 321",
    "rol": 2,
    "id_refiere": 0,
    "estado": true,
    "contraseña_usuario": "monitoslocos30",
    "correo_usuario": "katerine_O.O@gmail.com",
    "telefono_usuario": 3294568709,
    "id_usuario": 30930363
}




*/