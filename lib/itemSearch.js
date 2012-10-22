var amazonClient = require('./amazonClient').AmazonClient;

var ItemSearch = function() {
    this.amazonRequest = new amazonClient();
};

ItemSearch.prototype.search = function(responseGroup, keyword, callback) {
    
    this.amazonRequest.execute('ItemSearch', {
                'Keywords': keyword, 
                'ResponseGroup' : responseGroup,
                'Condition' : config.amazon.itemSearch.condition,
                'Availability' : config.amazon.itemSearch.availability,
                'SearchIndex' : config.amazon.itemSearch.searchIndex
            }, callback);
};

ItemSearch.prototype.large = function(keyword, callback) {
    this.search('Large', keyword, callback);
};

ItemSearch.prototype.browseNodes = function(keyword, callback) {
    this.search('BrowseNodes', keyword, callback);
};

ItemSearch.prototype.editorialReview = function(keyword, callback) {
    this.search('EditorialReview', keyword, callback);
};

ItemSearch.prototype.itemAttributes = function(keyword, callback) {
    this.search('ItemAttributes', keyword, callback);
};

ItemSearch.prototype.itemIds = function(keyword, callback) {
    this.search('ItemIds', keyword, callback);
};

ItemSearch.prototype.offerFull = function(keyword, callback) {
    this.search('OfferFull', keyword, callback);
};

ItemSearch.prototype.offerSummary = function(keyword, callback) {
    this.search('OfferSummary', keyword, callback);
};

ItemSearch.prototype.reviews = function(keyword, callback) {
    this.search('Reviews', keyword, callback);
};

ItemSearch.prototype.similarities = function(keyword, callback) {
    this.search('Similarities', keyword, callback);
};

ItemSearch.prototype.variationSummary = function(keyword, callback) {
    this.search('VariationSummary', keyword, callback);
};

ItemSearch.prototype.allResponseGroups = function(keyword, callback) {
    this.search('Large,BrowseNodes,EditorialReview,ItemAttributes,ItemIds,OfferFull,OfferSummary,Reviews,Similarities,VariationSummary', keyword, callback);  
};

exports.ItemSearch = ItemSearch;
