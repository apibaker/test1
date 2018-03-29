
const apibaker = require('apibaker');
const dbAdapter = apibaker.pg_adapter;
const execaction = apibaker.execaction;
const prepareInput = execaction.prepareInput;
const execAction = execaction.execAction;

module.exports = function(param, conn, succ, err) {
  var actionName = "Main_ReadEnt";
  var actionType = "Query";
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
  "cmd": "SELECT COUNT(*) AS  CNT  FROM (SELECT  T_1.Prop1 AS PROP1 FROM Main_Ent AS T_1 WHERE  T_1.Main_EntId = $1)  AS  COUNTQRY ",
  "inParam": [
   [
    1,
    "Id",
    "Main_EntId",
    "=",
    1
   ]
  ],
  "outCount": true
 },
 {
  "cmd": "SELECT  T_1.Prop1 AS PROP1 FROM Main_Ent AS T_1 WHERE  T_1.Main_EntId = $1",
  "inFrom": true,
  "inSize": true,
  "inParam": [
   [
    1,
    "Id",
    "Main_EntId",
    "=",
    1
   ]
  ],
  "outResult": [
   [
    1,
    "Integer",
    "Prop1",
    "Prop1",
    false
   ]
  ],
  "outMultiple": true,
  "outQuery": true
 }
];
  execAction(input, dbObj, succ, err, dbAdapter, conn);
}
