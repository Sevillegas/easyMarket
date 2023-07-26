class Usuario {
    constructor(
        id_usuario,
        nombre_usuario,
        id_ciudad,
        direccion,
        rol,
        id_refiere,
        estado,
        contraseña_usuario,
        correo_usuario,
        telefono_usuario
    ) {
        this.id_usuario = id_usuario,
            this.nombre_usuario = nombre_usuario,
            this.id_ciudad = id_ciudad,
            this.direccion = direccion,
            this.rol = rol,
            this.id_refiere = id_refiere,
            this.estado = estado,
            this.contraseña_usuario = contraseña_usuario,
            this.correo_usuario = correo_usuario,
            this.telefono_usuario = telefono_usuario
    }




}


$(function () {


    let loggedUser;

    let modifyProduct = new Object();


    // LOGGED USER DATA INTERACTIONS

    $('#btn-load-data').on('click', function () {

        
        $.ajax({
            type: "GET",
            url: "/user/1144193023",
            success: function (response) {

                //console.log("response:" + JSON.stringify(response[0]));

                let respuesta = response[0];

                loggedUser = new Usuario(
                    id_usuario = respuesta.id_usuario,
                    nombre_usuario = respuesta.nombre_usuario,
                    id_ciudad = respuesta.id_ciudad,
                    direccion = respuesta.direccion,
                    rol = respuesta.rol,
                    id_refiere = respuesta.id_refiere,
                    estado = respuesta.estado,
                    contraseña_usuario = respuesta.contraseña_usuario,
                    correo_usuario = respuesta.correo_usuario,
                    telefono_usuario = respuesta.telefono_usuario,
                );
                //console.log(loggedUser);


                $.ajax({
                    type: "GET",
                    url: "/user/ciudad/" + loggedUser.id_ciudad,
                    success: function (response) {

                        //console.log(JSON.stringify(response));

                        $("#cityFormUpdate").val(response[0].nombre_ciudad)

                    }
                })

                $("#nameFormUpdate").val(loggedUser.nombre_usuario);
                $("#docFormUpdate").val(loggedUser.id_usuario);
                $("#adressFormUpdate").val(loggedUser.direccion);
                $("#phoneFormUpdate").val(loggedUser.telefono_usuario);
                $("#refFormUpdate").val(loggedUser.id_refiere != 0 ? loggedUser.id_refiere : "Sin referido");
                $("#emailFormUpdate").val(loggedUser.correo_usuario);
                $("#passwordFormUpdate").val(loggedUser.contraseña_usuario);
                $("#adminFormUpdate").val(loggedUser.rol != 1 ? "Usuario sin privilegios" : "Administrador del sistema");


            },
            error: function (response) {

                console.log("GET NO realizado");

            },
        });


        $("#btn-modify").show();
        $("#btn-delete-user").show();

    });


    $("#btn-delete-user").on('click', function () {

        $.ajax({
            type: "DELETE",
            url: "/user/" + loggedUser.id_usuario,
            success: function (response) {

                location.href = "/";
                alert("Usuario eliminado exitosamente");


            },
            error: function (response) {

                alert("Usuario no pudo ser eliminado");

            },
        });

    });

    $("#btn-accept-user").click(function () {


        if (loggedUser != undefined) {

            alert("Se ha modificacion exitosamente");

            let nameForm = $("#nameFormUpdate").val();
            let docForm = $("#docFormUpdate").val();
            let adressForm = $("#adressFormUpdate").val();
            let phoneForm = $("#phoneFormUpdate").val();
            let emailForm = $("#emailFormUpdate").val();
            let passwordForm = $("#passwordFormUpdate").val();
            let refForm = $("#refFormUpdate").val();



            $.ajax({
                type: "PUT",
                url: "/user",
                data: {
                    "id_usuario": docForm,
                    "nombre_usuario": nameForm,
                    "id_ciudad": loggedUser.id_ciudad,
                    "direccion": adressForm,
                    "rol": loggedUser.rol,
                    "id_refiere": isNaN(parseInt(refForm)) ? 0 : refForm,
                    "estado": 1,
                    "contraseña_usuario": passwordForm,
                    "correo_usuario": emailForm,
                    "telefono_usuario": phoneForm
                },
                success: function (response) {

                    console.log("Modificacion enviada:" + JSON.stringify(loggedUser));

                },
                error: function (response) {

                    console.log("No se ha podido enviar: " + JSON.stringify(loggedUser));

                }
            });



        }

        else {

            alert("No hay datos que actualizar");

        }







        $("#nameFormUpdate").attr("class", "form-control-plaintext");
        $("#nameFormUpdate").prop("readonly", true);

        $("#docFormUpdate").attr("class", "form-control-plaintext");
        $("#docFormUpdate").prop("readonly", true);

        $("#adressFormUpdate").attr("class", "form-control-plaintext");
        $("#adressFormUpdate").prop("readonly", true);

        $("#refFormUpdate").attr("class", "form-control-plaintext");
        $("#refFormUpdate").prop("readonly", true);

        $("#phoneFormUpdate").attr("class", "form-control-plaintext");
        $("#phoneFormUpdate").prop("readonly", true);

        $("#emailFormUpdate").attr("class", "form-control-plaintext");
        $("#emailFormUpdate").prop("readonly", true);

        $("#passwordFormUpdate").attr("class", "form-control-plaintext");
        $("#passwordFormUpdate").prop("readonly", true);

        $("#btn-signout").show();
        $("#btn-modify").show();
        $("#btn-load-data").show();
        $("#btn-delete-user").show();

        $("#btn-accept-user").prop("hidden", true);
    })



    // UI ELEMENT CHANGES

    $("#btn-modify").click(function () {

        console.log("modify:" + JSON.stringify(loggedUser));

        $("#nameFormUpdate").attr("class", "form-control");
        $("#nameFormUpdate").removeAttr("readonly");

        $("#docFormUpdate").attr("class", "form-control");
        $("#docFormUpdate").removeAttr("readonly");

        $("#adressFormUpdate").attr("class", "form-control");
        $("#adressFormUpdate").removeAttr("readonly");

        $("#phoneFormUpdate").attr("class", "form-control");
        $("#phoneFormUpdate").removeAttr("readonly");

        $("#emailFormUpdate").attr("class", "form-control");
        $("#emailFormUpdate").removeAttr("readonly");

        $("#passwordFormUpdate").attr("class", "form-control");
        $("#passwordFormUpdate").removeAttr("readonly");

        $("#refFormUpdate").attr("class", "form-control");
        $("#refFormUpdate").removeAttr("readonly");



        $("#btn-accept-user").removeAttr("hidden");

        $("#btn-signout").hide();
        $("#btn-modify").hide();
        $("#btn-load-data").hide();
        $("#btn-delete-user").hide();



    })



    $("#btn-signout").click(function () {

        location.href = "/";

    })



    //------------------ PRODUCTS INTERACTIONS--------------------------



    // CREATE NEW PRODUCT

    $("#btn-create-product").on('click', function () {

        let newProduct = new Object();

        newProduct.descripcion_producto = $('#nameProductForm').val();
        newProduct.id_categoria = $('input[name="btn-category"]:checked').val();
        newProduct.precio = $('#priceForm').val();
        newProduct.cantidad = $('#quantityForm').val();
        newProduct.id_oferta = $('input[name="btn-offer"]:checked').val();

        $.ajax({
            type: "POST",
            url: "/product",
            data: newProduct,
            dataType: "dataType",
            success: function (response) {

                alert("datos creados correctamente");

            },

            error: function (response) {

                alert("ha ocurrido un error");

            },


        });

    });


    // MODIFY PRODUCTS

    $("#modify-fieldset").hide();
    $("#btn-modify").hide();
    $("#btn-delete-user").hide();


    $("#btn-search-product").on('click', function () {

        let searchIdField = $('#searchProductForm').val();

        let descripcion_producto = $('#nameModProductForm');
        let id_categoria = $('input[name="btn-mod-category"]:checked');
        let precio = $('#priceModForm');
        let cantidad = $('#quantityModForm');
        let id_oferta = $('input[name="btn-mod-offer"]:checked');

        $.ajax({
            type: "GET",
            url: "/product/" + searchIdField,
            success: function (response) {

                $('#modify-fieldset').show();

                modifyProduct = response[0];

                descripcion_producto.val(modifyProduct.descripcion_producto);
                id_categoria.val(modifyProduct.id_categoria);
                precio.val(modifyProduct.precio);
                cantidad.val(modifyProduct.cantidad);
                id_oferta.val(modifyProduct.id_oferta);

                console.log(JSON.stringify(response));

            }
        });


    });


    $("#btn-modify-product").on('click', function () {

        let descripcion_producto = $('#nameModProductForm').val();
        let id_categoria = $('input[name="btn-mod-category"]:checked').val();
        let precio = $('#priceModForm').val();
        let cantidad = $('#quantityModForm').val();
        let id_oferta = $('input[name="btn-mod-offer"]:checked').val();

        $.ajax({
            type: "PUT",
            url: "/product",
            data: {
                "descripcion_producto": descripcion_producto,
                "id_categoria": id_categoria,
                "precio": precio,
                "cantidad": cantidad,
                "id_oferta": id_oferta,
                "id_producto": modifyProduct.id_producto
            },
            success: function (response) {

                console.log(JSON.stringify(response));
                alert("se modifico exitosamente el producto");

            }
        });


    });


})