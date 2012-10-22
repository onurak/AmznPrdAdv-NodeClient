var amazonClient = require('./amazonClient').AmazonClient;

var CartAdd = function() {
    this.amazonRequest = new amazonClient();
};

CartAdd.prototype.add = function(responseGroup, cartId, offerListingId, quantity, HMAC, callback) {
    
    this.amazonRequest.execute('CartAdd', {
                'CartId': cartId,
                'Item.1.OfferListingId' : offerListingId,
                'Item.1.Quantity' : quantity,
                'HMAC' : HMAC,
                'ResponseGroup' : responseGroup
            }, callback);
};

CartAdd.prototype.cart = function(cartId, offerListingId, quantity, HMAC, callback) {
    this.add('Cart', cartId, offerListingId, quantity, HMAC, callback);
};

CartAdd.prototype.cartSimilarities = function(cartId, offerListingId, quantity, HMAC, callback) {
    this.add('CartSimilarities', cartId, offerListingId, quantity, HMAC, callback);
};

CartAdd.prototype.cartTopSellers = function(cartId, offerListingId, quantity, HMAC, callback) {
    this.add('CartTopSellers', cartId, offerListingId, quantity, HMAC, callback);
};

CartAdd.prototype.cartNewReleases = function(cartId, offerListingId, quantity, HMAC, callback) {
    this.add('CartNewReleases', cartId, offerListingId, quantity, HMAC, callback);
};

CartAdd.prototype.allResponseGroups = function(cartId, offerListingId, quantity, HMAC, callback) {
    this.add('Cart,CartSimilarities,CartTopSellers,CartNewReleases', cartId, offerListingId, quantity, HMAC, callback);  
};

exports.CartAdd = CartAdd;
