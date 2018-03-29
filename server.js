
  
const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

const router = express.Router();

const apibaker = require('apibaker');
const dbAdapter = apibaker.pg_adapter;
const database = require('./database.js');
const dbconn = dbAdapter.connect("simple_app", database);


var Main_CreateEnt = require("./action/act_Main_CreateEnt.js");

var Main_ReadEnt = require("./action/act_Main_ReadEnt.js");

var Main_DeleteEnt = require("./action/act_Main_DeleteEnt.js");



router.put('/Main/ent', function(req, resp) {
    var param = {};
    param.id = req.params.id;
    param.obj = req.body.obj;
    Main_CreateEnt (param, dbconn, function(res){
      resp.json(res);
    }, function(error){
      resp.status(500);
      resp.json(error);
    })
});

router.get('/Main/ent/:id', function(req, resp) {
    var param = {};
    param.id = req.params.id;
    param.obj = req.body.obj;
    Main_ReadEnt (param, dbconn, function(res){
      resp.json(res);
    }, function(error){
      resp.status(500);
      resp.json(error);
    })
});

router.delete('/Main/ent/:id', function(req, resp) {
    var param = {};
    param.id = req.params.id;
    param.obj = req.body.obj;
    Main_DeleteEnt (param, dbconn, function(res){
      resp.json(res);
    }, function(error){
      resp.status(500);
      resp.json(error);
    })
});


app.use('/api', router);

app.listen(port);

