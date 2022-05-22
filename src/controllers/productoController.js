const axios = require('axios')
;
const { format } = require('express/lib/response');
const { debug } = require('request');

const urlBase = "us-cdbr-east-05.cleardb.net/producto"


function formatMoney(number) {
    return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

///////////////// GET /////////////////////

const producto = (req, res) => {
    axios.get(urlBase)
    .then(function (response) {
        // handle success
        console.log("ok");
        const producto = response;
        res.render("productos/get",{
            layout:"productos",
            producto:producto['data']
        });
    })
    .catch(function (error) {
        // handle error
        console.group(error);
    })
    .then(function () {
        // always executed
        console.log("siempre");
    });
}

/////////////// POST ///////////////

const vistaAgregaProducto = (req, res) => {
    res.render("productos/post",{
        layout:"productos",
    });
    console.log("vista post");
}

const agregaProducto = (req, res) => {
    let nombre = req.body.nombre;
    let codigo = req.body.codigo;
    let valor = req.body.valor;
    let foto = req.body.foto;
    let oferta = req.body.oferta;
    let categoria = req.body.categoria;
    let descripcion = req.body.descripcion;
    axios.post(urlBase,
    {
        nombre : nombre,
        codigo : codigo,
        valor : valor,
        foto : foto,
        oferta : oferta,
        categoria : categoria,
        descripcion : descripcion
    })
    .then(function (response) {
        const mensaje = response;
        console.log(producto['data']);
        res.render("productos/post",{
            layout:"productos",
            mensaje:"Producto agregado: " + mensaje['data']
        });
        console.log("then");
    })
    .catch(function (error) {
        console.log(error);
        console.log("esto es un error");
    })
}

/////////////////// PUT /////////////////

const vistaActualizaProducto = (req, res) => {
    res.render("productos/put",{
        layout:"productos",
    });
}

const actualizarProducto = (req, res) => {
    let id = req.body.id;
    let nombre= req.body.nombre;
    let codigo= req.body.codigo;
    let valor= req.body.valor;
    let foto= req.body.foto;
    let oferta= req.body.oferta;
    let categoria= req.body.categoria;
    let descripcion= req.body.descripcion;
    axios.put(urlBase, {
        id : id,
        nombre : nombre,
        codigo : codigo,
        valor : valor,
        foto : foto,
        oferta : oferta,
        categoria : categoria,
        descripcion : descripcion
    })
    .then(function (response) {
        const mensaje = response;
        console.log(producto['data']);
        res.render("productos/put", {
            layout:"productos",
            mensaje:"Producto actualizado " + mensaje['data']
        });
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });
}

/////////////// DELETE ///////////////////

const vistaDeleteProducto = (req, res) => {
    res.render("productos/delete",{
        layout:"productos",
    });
}

const deleteProducto = (req,  res) => {
    let id = req.body.id;

    axios.delete(urlBase + "/" + id)
    .then(function (response) {
        const mensaje = response;
        res.render("productos/delete", {
            layout:"productos",
            mensaje:"Producto eliminado " + mensaje['data']
        });
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });
}

module.exports =
{
    producto,
    vistaAgregaProducto,
    agregaProducto,
    vistaActualizaProducto,
    actualizarProducto,
    vistaDeleteProducto,
    deleteProducto
}