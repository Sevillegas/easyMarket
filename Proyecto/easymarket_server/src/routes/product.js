const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

//Conexion base de datos
const { connection } = require("../config.db");



//Metodos GET, POST, DELETE 



const getProduct = (request, response) => {
    const id = request.params.id;
    connection.query("CALL getProduct(?)", [id],
        (error, results) => {
            console.log(results);
            if (error) throw error;
            response.status(200).json(results[0]);
        });
};


const getProductBase = (request, response) => {
    connection.query("CALL getProductBase()", 
        (error, results) => {
            console.log(results);
            if (error) throw error;
            response.status(200).json(results[0]);
        });
};

const postProduct = (request, response) => {
    const { descripcion_producto, id_categoria, precio, cantidad, id_oferta } = request.body;
    connection.query("CALL createProduct(?,?,?,?,?)",
        [descripcion_producto, id_categoria, precio, cantidad, id_oferta],
        (error, results) => {
            if (error) throw error;
            response.status(201).json({ "datos creados correctamente": results[0] });
        });
};


const putProduct = (request, response) => {
    const { descripcion_producto, id_categoria, precio, cantidad, id_oferta, id_producto } = request.body;
    connection.query("CALL updateProduct(?,?,?,?,?,?)",
        [descripcion_producto, id_categoria, precio, cantidad, id_oferta, id_producto],
        (error, results) => {
            if (error) throw error;
            response.status(201).json({ "datos actualizados correctamente": results });
        });
};


const delProduct = (request, response) => {
    const id = request.params.id;
    connection.query("CALL deleteProduct(?)",
        [id],
        (error, results) => {
            if (error) throw error;
            response.status(201).json({ "datos eliminados exitosamente": results.affectedRows });
        });
};


app.route("/product/:id").delete(delProduct);
app.route("/product/:id").get(getProduct);
app.route("/product").get(getProductBase);
app.route("/product").post(postProduct);
app.route("/product").put(putProduct);





/*


{
    "id_producto": 1
}

{
    "descripcion_producto": "Televisor 4k",
    "id_categoria": 1,
    "precio": 20500,
    "cantidad": 5,
    "id_oferta": 1
}


{
    "descripcion_producto": "Licuadora XXL",
    "id_categoria": 2,
    "precio": 100500,
    "cantidad": 2,
    "id_oferta": 3,
    "id_producto": 21
}


*/


























module.exports = app;