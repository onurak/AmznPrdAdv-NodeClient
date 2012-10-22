var amazonClient = require('./amazonClient').AmazonClient;

var CartCreate = function() {
    this.amazonRequest = new amazonClient();
};

CartCreate.prototype.create = function(responseGroup, offerListingId, quantity, callback) {
    
    this.amazonRequest.execute('CartCreate', {
                'Item.1.OfferListingId': offerListingId, 
                'Item.1.Quantity' : quantity,
                'ResponseGroup' : responseGroup
            }, callback);
};

CartCreate.prototype.cart = function(offerListingId, quantity, callback) {
    this.create('Cart', offerListingId, quantity, callback);
};

CartCreate.prototype.cartSimilarities = function(offerListingId, quantity, callback) {
    this.create('CartSimilarities', offerListingId, quantity, callback);
};

CartCreate.prototype.cartTopSellers = function(offerListingId, quantity, callback) {
    this.create('CartTopSellers', offerListingId, quantity, callback);
};

CartCreate.prototype.cartNewReleases = function(offerListingId, quantity, callback) {
    this.create('CartNewReleases', offerListingId, quantity, callback);
};

CartCreate.prototype.allResponseGroups = function(offerListingId, quantity, callback) {
    this.create('Cart,CartSimilarities,CartTopSellers,CartNewReleases', offerListingId, quantity, callback);  
};

exports.CartCreate = CartCreate;
