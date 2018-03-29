  
const apibaker = require('apibaker');
const dbAdapter = apibaker.pg_adapter;
const database = require('./database.js');
const dbconn = dbAdapter.connect("simple_app", database);
const assert = require('assert');


const Main_CreateEnt = require("./action/act_Main_CreateEnt.js");

const Main_ReadEnt = require("./action/act_Main_ReadEnt.js");

const Main_DeleteEnt = require("./action/act_Main_DeleteEnt.js");


describe('simple_app', function() {
    
        it('main_CreateEnt', function(done) {
            let param = {"obj":{"Prop1":1}};
            let expected = {"main_EntId":1};
            main_CreateEnt (param, dbconn, function(res){
                assert.equal(JSON.stringify(expected) , JSON.stringify(res))
                done()
            }, function(error){
                done(error)
            })
        });   
    
        it('main_ReadEnt', function(done) {
            let param = {"id":1};
            let expected = {"count":1,"data":[{"Prop1":1}]};
            main_ReadEnt (param, dbconn, function(res){
                assert.equal(JSON.stringify(expected) , JSON.stringify(res))
                done()
            }, function(error){
                done(error)
            })
        });   
    
        it('main_DeleteEnt', function(done) {
            let param = {"id":1};
            let expected = {};
            main_DeleteEnt (param, dbconn, function(res){
                assert.equal(JSON.stringify(expected) , JSON.stringify(res))
                done()
            }, function(error){
                done(error)
            })
        });   
    
        it('main_ReadEnt', function(done) {
            let param = {"id":1};
            let expected = {"count":0,"data":[]};
            main_ReadEnt (param, dbconn, function(res){
                assert.equal(JSON.stringify(expected) , JSON.stringify(res))
                done()
            }, function(error){
                done(error)
            })
        });   
    
    
        it('disconnectDB', function(done) {
            dbAdapter.disconnect("simple_app", dbconn);
            done()
        })
    });
