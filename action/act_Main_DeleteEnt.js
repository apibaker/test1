
const apibaker = require('apibaker');
const dbAdapter = apibaker.pg_adapter;
const execaction = apibaker.execaction;
const prepareInput = execaction.prepareInput;
const execAction = execaction.execAction;

module.exports = function(param, conn, succ, err) {
  var actionName = "Main_DeleteEnt";
  var actionType = "Delete";
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
  "cmd": "DELETE FROM Main_Ent WHERE Main_EntId=$1",
  "inParam": [
   [
    1,
    "Id",
    "Main_EntId",
    "",
    null
   ]
  ]
 }
];
  execAction(input, dbObj, succ, err, dbAdapter, conn);
}
