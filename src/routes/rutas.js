const contactoController = require('../controllers/usuarioController');
//const controladorGeneral = require('../controllers/controladorGeneral')
const productoController = require('../controllers/productoController');
const allController = require('../controllers/allController');



const createRoutes = (app) => {
    app.get('/', allController.vistaMain);

    app.get('/productos/', productoController.producto);
    app.get('/productos/post', productoController.vistaAgregaProducto);
    app.post('/productos/post', productoController.agregaProducto);
    app.get('/productos/put', productoController.vistaActualizaProducto);
    app.post('/productos/put', productoController.actualizarProducto);
    app.get('/productos/delete', productoController.vistaDeleteProducto);
    app.post('/productos/delete', productoController.deleteProducto);

    app.get('/usuarios/', contactoController.usuario);
    app.get('/usuarios/post', contactoController.vistaAgregaUsuario);
    app.post('/usuarios/post', contactoController.agregaUsuario);
    app.get('/usuarios/put', contactoController.vistaActualizaUsuario);
    app.post('/usuarios/put', contactoController.actualizarUsuario);    
    app.get('/usuarios/delete', contactoController.vistaDeleteUsuario);
    app.post('/usuarios/delete', contactoController.deleteUsuario);       
  //  app.put('/categorias', contactoController.actualizaCategoria);
  //  app.delete('/categorias', contactoController.eliminaCategoria);



};


module.exports = createRoutes;