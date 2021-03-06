const express = require("express");
const request = require("request");
const exphbs = require("express-handlebars");
const path = require('path');
const app = express();

const rutas = require('./routes/rutas.js');

var hbs = exphbs.create({defaultLayout: 'main'});
app.engine("handlebars", hbs.engine);
app.set("view engine","handlebars");

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
  }))

console.log ('Inicio')

rutas(app);

app.use((req, res) => {
    res.status(404).send("Página no encontrada");
});

//const port = 3000
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log(`Listening on port `, app.get('port'))
});