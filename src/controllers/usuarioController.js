const axios = require('axios')

;
//const request = require("request");
const urlBase = "http://127.0.0.1:9090/usuario"


////////////////// GET ////////////////////////////////////////////

const usuario = (req, res) => {


    axios.get(urlBase)
    .then(function (response) {
      // handle success
      
      const usuario = response;
     
      res.render("usuarios/get",{ 
          layout:"usuarios",
          usuario:usuario['data']
      });

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
      console.log("siempre");
    });


  }


////////////////// POST ////////////////////////////////////////////

  const vistaAgregaUsuario = (req, res) => {

    res.render("usuarios/post",{ 
        layout:"usuarios",     
    });

  }


const agregaUsuario = (req, res) => {

    let email= req.body.email
    let nombre= req.body.nombre
    let apellido= req.body.apellido;
    let rut= req.body.rut;
    let tipo_permiso= req.body.tipo_permiso;
    let contrasena= req.body.contrasena;

    axios.post(urlBase,
        {
            nombre : nombre,
            apellido : apellido,
            rut : rut,
            email : email,
            contrasena : contrasena,
            tipoPermiso : tipo_permiso
        }
        )
    .then(function (response) {

      const mensaje = response;
      console.log(usuario['data']);
      res.render("usuarios/post",{ 
          layout:"usuarios",
          mensaje :"Contacto Creado: " + mensaje['data']

      });
      console.log("then");

    })
    .catch(function (error) {
      // handle error
      console.log(error);
      console.log("esto es un error");
    });    

  
  }


////////////////// PUT ////////////////////////////////////////////

const vistaActualizaUsuario = (req, res) => {

  res.render("usuarios/put",{ 
      layout:"usuarios",     
  });

}

  const actualizarUsuario = (req, res) => {
    let email= req.body.email
    let nombre= req.body.nombre
    let apellido= req.body.apellido;
    let rut= req.body.rut;
    let tipo_permiso= req.body.tipo_permiso;
    let id= req.body.id;
    let contrasena= req.body.contrasena;
    axios.put(urlBase,
        {
          idUser : id,
          email :email,
          nombre : nombre,
          apellido : apellido,
          contrasena : contrasena,
          rut : rut,
          tipoPermiso : tipo_permiso
        })
    .then(function (response) {

      const mensaje = response;
      console.log(usuario['data']);
      res.render("usuarios/put",{ 
          layout:"usuarios",
          mensaje :"Contacto actualizado " + mensaje['data']
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });    
  }

////////////////// DELETE ////////////////////////////////////////////

const vistaDeleteUsuario = (req, res) => {

  res.render("usuarios/delete",{ 
      layout:"usuarios",     
  });

}

  const deleteUsuario = (req, res) => {
    let id = req.body.id

    axios.delete(urlBase + "/" +  id)
    .then(function (response) {

      const mensaje = response;
      res.render("usuarios/delete",{ 
          layout:"usuarios",
          mensaje :"Contacto eliminado " + mensaje['data']
      });

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });    

  
  }



module.exports =
{
  usuario,
  vistaAgregaUsuario,
  agregaUsuario,
  vistaActualizaUsuario,
  actualizarUsuario,
  vistaDeleteUsuario,
  deleteUsuario
}