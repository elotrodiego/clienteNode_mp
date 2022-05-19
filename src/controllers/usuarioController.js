const axios = require('axios')

;
//const request = require("request");
const urlBase = "http://127.0.0.1:9090/usuario"


////////////////// GET ////////////////////////////////////////////

const usuario = (req, res) => {


    axios.get(urlBase)
    .then(function (response) {
      // handle success
      console.log("ok");
      const usuario = response;
     
      res.render("get",{ 
          layout:"main",
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

    res.render("post",{ 
        layout:"main",     
    });

  }


const agregaUsuario = (req, res) => {

    let email= req.body.email
    let nombre= req.body.nombre
    let apellido= req.body.apellido;
    let rut= req.body.rut;
    let tipoPermiso= req.body.tipoPermiso;
    let id= req.body.id;
    let contrasena= req.body.contrasena;


    axios.post(urlBase,
        {
            nombre : nombre,
            apellido : apellido,
            rut : rut,
            email : email,
            contrasena : contrasena,
            tipoPermiso : tipoPermiso
        }
        )
    .then(function (response) {

      const mensaje = response;
      console.log(usuario['data']);
      res.render("post",{ 
          layout:"main",
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

  res.render("put",{ 
      layout:"main",     
  });

}

  const actualizarUsuario = (req, res) => {
    let email= req.body.email
    let nombre= req.body.nombre
    let apellido= req.body.apellido;
    let rut= req.body.rut;
    let tipo_permiso= req.body.tipo_permiso;
    let id= req.body.id;

    axios.put(urlBase,
        {
          idUsuario : id,
          email :email,
          nombre : nombre,
          apellido : apellido,
          rut : rut,
          tipo_permiso : tipo_permiso
        }
        )
    .then(function (response) {

      const mensaje = response;
      console.log(usuario['data']);
      res.render("put",{ 
          layout:"main",
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

  res.render("delete",{ 
      layout:"main",     
  });

}

  const deleteUsuario = (req, res) => {
    let id = req.body.id

    axios.delete(urlBase + "/" +  id)
    .then(function (response) {

      const mensaje = response;
      res.render("delete",{ 
          layout:"main",
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