const contactoController = require('../controllers/usuarioController');
//const controladorGeneral = require('../controllers/controladorGeneral')



const createRoutes = (app) => {
    app.get('/', contactoController.usuario);
    app.get('/get', contactoController.usuario);
    app.get('/post', contactoController.vistaAgregaUsuario);
    app.post('/post', contactoController.agregaUsuario);
    app.get('/put', contactoController.vistaActualizaUsuario);
    app.post('/put', contactoController.actualizarUsuario);    
    app.get('/delete', contactoController.vistaDeleteUsuario);
    app.post('/delete', contactoController.deleteUsuario);       
  //  app.put('/categorias', contactoController.actualizaCategoria);
  //  app.delete('/categorias', contactoController.eliminaCategoria);



};


module.exports = createRoutes;