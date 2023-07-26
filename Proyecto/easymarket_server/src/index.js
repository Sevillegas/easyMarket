const express = require("express");
const app = express();
const path = require('path');




let publicPath = path.resolve(__dirname, 'public');


//cuerpo de la solicitud POST

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Archivos estaticos

app.use(express.static(publicPath + '/resources'));



app.get('/', (req, res) => {

    res.status(201).sendFile('index.html', {
        root: publicPath
    });

   
});

app.get('/userPage', (req, res) => {   

    res.status(201).sendFile('page_user_management.html', {
        root: publicPath
    });

});


//Archivo de rutas definidas

app.use(require('./routes/login'));
app.use(require('./routes/user'));
app.use(require('./routes/product'));
app.use(require('./routes/order'));




app.listen(process.env.PORT || 3300, () => {
    console.log("servidor ejecutandose en el puerto 3300")
});


module.exports = app;