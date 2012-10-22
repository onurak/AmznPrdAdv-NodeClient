var amazonClient = require('./amazonClient').AmazonClient;

var CartGet = function() {
    this.amazonRequest = new amazonClient();
};

CartGet.prototype.get = function(responseGroup, cartId, cartItemId, HMAC, callback) {
    
    this.amazonRequest.execute('CartGet', {
                'CartId': cartId, 
                'CartItemId' : cartItemId,
                'HMAC' : HMAC,
                'ResponseGroup' : responseGroup
            }, callback);
};

CartGet.prototype.cart = function(cartId, cartItemId, HMAC, callback) {
    this.get('Cart', cartId, cartItemId, HMAC, callback);
};

CartGet.prototype.cartSimilarities = function(cartId, cartItemId, HMAC, callback) {
    this.get('CartSimilarities', cartId, cartItemId, HMAC, callback);
};

CartGet.prototype.cartTopSellers = function(cartId, cartItemId, HMAC, callback) {
    this.get('CartTopSellers', cartId, cartItemId, HMAC, callback);
};

CartGet.prototype.cartNewReleases = function(cartId, cartItemId, HMAC, callback) {
    this.get('CartNewReleases', cartId, cartItemId, HMAC, callback);
};

CartGet.prototype.allResponseGroups = function(cartId, cartItemId, HMAC, callback) {
    this.get('Cart,CartSimilarities,CartTopSellers,CartNewReleases', cartId, cartItemId, HMAC, callback);  
};

exports.CartGet = CartGet;
