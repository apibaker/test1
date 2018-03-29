

const apibaker = require('apibaker')
const dbAdapter = apibaker.pg_adapter;

const setupSchema = function(conn, succ, err) {
  var sql = [
 "CREATE SCHEMA IF NOT EXISTS  simple_app;",
 "SET SEARCH_PATH TO  simple_app ,public ;",
 "drop table  if exists Main_Ent CASCADE;",
 "CREATE TABLE IF NOT EXISTS Main_Ent(Main_EntId BIGSERIAL NOT NULL ,Prop1 INT, CONSTRAINT  PK_Main_Ent  PRIMARY KEY (MAIN_ENTID))  ;"
]
  dbAdapter.runSql(conn, sql, succ, err)
}

const database = require('./database.js');
const dbconn = dbAdapter.connect("simple_app", database);

setupSchema (dbconn, function(res){
  console.log("database setup successfully!")
  dbAdapter.disconnect("simple_app", dbconn)
}, function(error){
  console.log(error)
  dbAdapter.disconnect("simple_app", dbconn)
})


