const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();



//Conexion base de datos
const { connection } = require("../config.db");



const postPass = (request, response) => {
    const { correo_usuario, contraseña_usuario } = request.body;
    connection.query("CALL validateAuthentication(?,?)",
        [correo_usuario, contraseña_usuario],
        (error, results) => {
            if (error)
                throw error;
            response.status(200).json(results[0]);
        });


};


app.route("/login")
    .post(postPass)





/*

http://localhost:3300

npm run dev


*/




module.exports = app;
















