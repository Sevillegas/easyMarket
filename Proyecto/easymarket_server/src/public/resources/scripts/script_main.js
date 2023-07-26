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

  // LOGGED USER OBJECT CREATION





  // brayan1345



  // LOGIN FORM INTERACTIONS

  $('#loginForm').on('submit', function () {

    let loginUser = $('#loginID').val();
    let passUser = $('#passwordID').val();



    $.ajax({
      type: "POST",
      url: "/login",
      data: {
        "correo_usuario": loginUser
      },
      success: function (response) {

        if (response[0].contraseña_usuario === passUser) {

          alert("Ingreso satisfactorio");
          location.href = "/userPage";


        }
        else {
          alert("Correo o contraseña no validos, ingresalos nuevamente");
        }
      },
      error: function (error) {
        if (error)
          throw error;
      }


    });




  })



  // USER CREATION FORM INTERACTIONS

  $('#userCreationForm').on('submit', function () {

    let newUser = new Usuario();

    newUser.id_usuario = $('#idForm').val();
    newUser.nombre_usuario = $('#nameForm').val();
    newUser.id_ciudad = $('input[name="city-sel-btn"]:checked').val();
    newUser.direccion = $('#addressForm').val();
    newUser.rol = $('#isAdminCheck').is(":checked") === true ? 1 : 2;
    newUser.id_refiere = $('#refForm').is(":empty") ? 0 : $('#refForm').val();
    newUser.estado = 1;
    newUser.contraseña_usuario = $('#passwordForm').val();
    newUser.correo_usuario = $('#emailForm').val();
    newUser.telefono_usuario = $('#phoneForm').val();



    $.ajax({
      type: "POST",
      url: "/user",
      data: newUser,
      success: function (response) {

        //console.log(newUser);

        alert("datos creados correctamente");

        //alert(JSON.stringify(newUser));


      },
      error: function (response) {

        //console.log(newUser);

        alert("ha ocurrido un error");

      },

    });



  })



  // BUTTON TEST


  $('#btn_test').on('click', function () {

    console.log(loggedUser);

  })



})




