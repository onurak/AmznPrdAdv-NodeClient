util = require('util');
config = require("./config.json");

var app = require('express').createServer();
require('./configuration.js').boot(app); 

var Test = require('./test/test').Test;
test = new Test();
test.testBrowseNodeLookup();
//test.testItemLookup();
//test.testItemSearch();
//test.testSimilarityLookup();
//test.testCartCreate();
//test.testCartGet();
//test.testCartModify();
//test.testCartAdd();
//test.testCartClear();  
