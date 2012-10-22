var amazonClient = require('./amazonClient').AmazonClient;

var SimilarityLookup = function() {
    this.amazonRequest = new amazonClient();
};

SimilarityLookup.prototype.similarityLookup = function(responseGroup, itemId, callback) {
    
    this.amazonRequest.execute('similarityLookup', {
                'ItemId': itemId, 
                'ResponseGroup' : responseGroup,
                'Condition' : config.amazon.similarityLookup.condition,
                'SimilarityType' : config.amazon.similarityLookup.similarityType
            }, callback);
};

SimilarityLookup.prototype.large = function(itemId, callback) {
    this.similarityLookup('Large', itemId, callback);
};

SimilarityLookup.prototype.browseNodes = function(itemId, callback) {
    this.similarityLookup('BrowseNodes', itemId, callback);
};

SimilarityLookup.prototype.editorialReview = function(itemId, callback) {
    this.similarityLookup('EditorialReview', itemId, callback);
};

SimilarityLookup.prototype.images = function(itemId, callback) {
    this.similarityLookup('Images', itemId, callback);
};

SimilarityLookup.prototype.itemAttributes = function(itemId, callback) {
    this.similarityLookup('ItemAttributes', itemId, callback);
};

SimilarityLookup.prototype.itemIds = function(itemId, callback) {
    this.similarityLookup('ItemIds', itemId, callback);
};

SimilarityLookup.prototype.offers = function(itemId, callback) {
    this.similarityLookup('Offers', itemId, callback);
};

SimilarityLookup.prototype.offerSummary = function(itemId, callback) {
    this.similarityLookup('OfferSummary', itemId, callback);
};

SimilarityLookup.prototype.promotionSummary = function(itemId, callback) {
    this.similarityLookup('PromotionSummary', itemId, callback);
};

SimilarityLookup.prototype.reviews = function(itemId, callback) {
    this.similarityLookup('Reviews', itemId, callback);
};

SimilarityLookup.prototype.salesRank = function(itemId, callback) {
    this.similarityLookup('SalesRank', itemId, callback);
};

SimilarityLookup.prototype.similarities = function(itemId, callback) {
    this.similarityLookup('Similarities', itemId, callback);
};

SimilarityLookup.prototype.variations = function(itemId, callback) {
    this.similarityLookup('Variations', itemId, callback);
};

SimilarityLookup.prototype.allResponseGroups = function(itemId, callback) {
    this.similarityLookup('Large,BrowseNodes,EditorialReview,Images,ItemAttributes,ItemIds,Offers,OfferSummary,PromotionSummary,Reviews,SalesRank,Similarities,Variations', itemId, callback);  
};

exports.SimilarityLookup = SimilarityLookup;
