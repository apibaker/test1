
const apibaker = require('apibaker');
const dbAdapter = apibaker.pg_adapter;
const execaction = apibaker.execaction;
const prepareInput = execaction.prepareInput;
const execAction = execaction.execAction;

module.exports = function(param, conn, succ, err) {
  var actionName = "Main_CreateEnt";
  var actionType = "Create";
  var entName = "Main_Ent";
  
  var input = prepareInput(param, actionType, entName);
  
  var dbObj = [
 {
  "cmd": "SET SEARCH_PATH TO  simple_app ,public ;\n",
  "inFrom": true,
  "inSize": true,
  "inParam": [],
  "outResult": [],
  "outMultiple": true,
  "outQuery": true
 },
 {
  "cmd": "INSERT INTO Main_Ent (Prop1) VALUES  ($1)  RETURNING Main_EntId ",
  "inParam": [
   [
    1,
    "Integer",
    "Prop1",
    "",
    -1
   ]
  ],
  "outResult": [
   [
    1,
    "Id",
    "Main_EntId",
    "Main_EntId",
    null
   ]
  ],
  "outInsertId": true
 }
];
  execAction(input, dbObj, succ, err, dbAdapter, conn);
}
