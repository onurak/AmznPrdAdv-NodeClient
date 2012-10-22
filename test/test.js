var BrowseNodeLookup = require("../lib/browseNodeLookup").BrowseNodeLookup;
var ItemLookup = require("../lib/itemLookup").ItemLookup;
var ItemSearch = require("../lib/itemSearch").ItemSearch;
var SimilarityLookup = require("../lib/similarityLookup").SimilarityLookup;
var CartCreate = require("../lib/cartCreate").CartCreate;
var CartGet = require("../lib/cartGet").CartGet;
var CartModify = require("../lib/cartModify").CartModify;
var CartAdd = require("../lib/cartAdd").CartAdd;
var CartClear = require("../lib/cartClear").CartClear;

var callback = function(error, results) {
    if (error) { 
        util.print('Error: ' + error + "\n") 
    }
    try {
        console.log(JSON.stringify(results));
    } catch(err) {
        util.print('Error: ' + err + "\n");
    }
}

var Test = function() {

    this.browseNodeLookup = new BrowseNodeLookup();
    this.itemLookup = new ItemLookup();
    this.itemSearch = new ItemSearch();
    this.similarityLookup = new SimilarityLookup();
    this.cartCreate = new CartCreate();
    this.cartGet = new CartGet();
    this.cartModify = new CartModify();
    this.cartAdd = new CartAdd();
    this.cartClear = new CartClear();
};

Test.prototype.testBrowseNodeLookup = function() {
    this.browseNodeLookup.allResponseGroups('<BrowseNodeID>',callback);  
};


Test.prototype.testItemLookup = function() {
    this.itemLookup.allResponseGroups('<ASIN>',callback);  
};


Test.prototype.testItemSearch = function() {
    this.itemSearch.allResponseGroups('<keyword>',callback); 
};


Test.prototype.testSimilarityLookup = function() {
    this.similarityLookup.allResponseGroups('<ASIN>',callback); 
};


Test.prototype.testCartCreate = function() {
    this.cartCreate.allResponseGroups('<OfferListingID>', '<Quantity>',callback);
};


Test.prototype.testCartGet = function() {
    this.cartGet.allResponseGroups('<CartID>', '<CartItemID>', '<HMAC>',callback); 
};


Test.prototype.testCartModify = function() {
    this.cartModify.allResponseGroups('<CartID>', '<CartItemID>', '<Quantity>', '<HMAC>',callback);
};


Test.prototype.testCartAdd = function() {
    this.cartAdd.allResponseGroups('<CartID>', '<OfferListingID>', '<Quantity>', '<HMAC>',callback);
};


Test.prototype.testCartClear = function() {
    this.cartClear.clearCart('<CartID>', '<HMAC>',callback); 
};


exports.Test = Test;