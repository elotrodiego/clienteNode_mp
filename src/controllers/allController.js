const axios = require('axios');

const urlBase = "http://localhost:9090/"

const vistaMain = (req, res) => {
    res.render("index" ,{
        layout:'main',
    });
}

module.exports = {
    vistaMain
}