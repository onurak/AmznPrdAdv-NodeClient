var amazonClient = require('./amazonClient').AmazonClient;

var ItemLookup = function() {
    this.amazonRequest = new amazonClient();
};

ItemLookup.prototype.lookup = function(responseGroup, itemId, callback) {
    
    this.amazonRequest.execute('ItemLookup', {
                'ItemId': itemId, 
                'ResponseGroup' : responseGroup,
                'Condition' : config.amazon.itemLookup.condition,
                'IdType' : config.amazon.itemLookup.idType
            }, callback);
};

ItemLookup.prototype.large = function(itemId, callback) {
    this.lookup('Large', itemId, callback);
};

ItemLookup.prototype.browseNodes = function(itemId, callback) {
    this.lookup('BrowseNodes', itemId, callback);
};

ItemLookup.prototype.editorialReview = function(itemId, callback) {
    this.lookup('EditorialReview', itemId, callback);
};

ItemLookup.prototype.images = function(itemId, callback) {
    this.lookup('Images', itemId, callback);
};

ItemLookup.prototype.itemAttributes = function(itemId, callback) {
    this.lookup('ItemAttributes', itemId, callback);
};

ItemLookup.prototype.itemIds = function(itemId, callback) {
    this.lookup('ItemIds', itemId, callback);
};

ItemLookup.prototype.offerFull = function(itemId, callback) {
    this.lookup('OfferFull', itemId, callback);
};

ItemLookup.prototype.promotionSummary = function(itemId, callback) {
    this.lookup('PromotionSummary', itemId, callback);
};

ItemLookup.prototype.offerSummary = function(itemId, callback) {
    this.lookup('OfferSummary', itemId, callback);
};

ItemLookup.prototype.reviews = function(itemId, callback) {
    this.lookup('Reviews', itemId, callback);
};

ItemLookup.prototype.salesRank = function(itemId, callback) {
    this.lookup('SalesRank', itemId, callback);
};

ItemLookup.prototype.similarities = function(itemId, callback) {
    this.lookup('Similarities', itemId, callback);
};

ItemLookup.prototype.variationImages = function(itemId, callback) {
    this.lookup('VariationImages', itemId, callback);
};

ItemLookup.prototype.allResponseGroups = function(itemId, callback) {
    this.lookup('Large,BrowseNodes,EditorialReview,Images,ItemAttributes,ItemIds,OfferFull,PromotionSummary,OfferSummary,Reviews,SalesRank,Similarities,VariationImages', itemId, callback);  
};

exports.ItemLookup = ItemLookup;
