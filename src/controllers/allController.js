const axios = require('axios');

const urlBase = "us-cdbr-east-05.cleardb.net/"

const vistaMain = (req, res) => {
    res.render("index" ,{
        layout:'main',
    });
}

module.exports = {
    vistaMain
}