let Catalog = require('../models/catalogModel');

let connection = require('../db.js');

exports.formationList = function(req,res){
    connection.query("select * from formation;", function(error,result) {
        if (error) console.log(error);
        catalog = new Catalog(result);
        res.render('formationList.ejs', {formations: catalog.formationsList, user: req.session.user});
    });
}

exports.login = function(req,res){
    res.render('login.ejs',{source: 'catalog'});
}
