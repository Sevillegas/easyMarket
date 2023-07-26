const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

//Conexion base de datos
const { connection } = require("../config.db");



//Metodos GET, POST, DELETE 



const getOrder = (request, response) => {
    const id_producto = request.body.id_producto;
    connection.query("CALL getOrders(?)", [id_producto],
        (error, results) => {
            console.log(results);
            if (error) throw error;
            response.status(200).json(results);
        });
};


const postOrder = (request, response) => {
    const { fecha_pago, metodo_pago, estado } = request.body;
    connection.query("CALL createProduct(?,?,?)",
        [fecha_pago, metodo_pago, estado],
        (error, results) => {
            if (error) throw error;
            response.status(201).json({ "datos creados correctamente": results });
        });
};



const delOrder = (request, response) => {
    const id = request.params.id;
    connection.query("CALL cancelOrders(?)",
        [id],
        (error, results) => {
            if (error) throw error;
            response.status(201).json({ "datos eliminados exitosamente": results.affectedRows });
        });
};


app.route("/order/:id").delete(delOrder);
app.route("/order").get(getOrder);
app.route("/order").post(postOrder);




module.exports = app;