var amazonClient = require('./amazonClient').AmazonClient;

var CartModify = function() {
    this.amazonRequest = new amazonClient();
};

CartModify.prototype.modify = function(responseGroup, cartId, cartItemId, quantity, HMAC, callback) {
    
    this.amazonRequest.execute('CartModify', {
                'CartId': cartId,
                'Item.1.CartItemId' : cartItemId,
                'Item.1.Quantity' : quantity,
                'HMAC' : HMAC,
                'ResponseGroup' : responseGroup
            }, callback);
};

CartModify.prototype.cart = function(cartId, cartItemId, quantity, HMAC, callback) {
    this.modify('Cart', cartId, cartItemId, quantity, HMAC, callback);
};

CartModify.prototype.cartSimilarities = function(cartId, cartItemId, quantity, HMAC, callback) {
    this.modify('CartSimilarities', cartId, cartItemId, quantity, HMAC, callback);
};

CartModify.prototype.cartTopSellers = function(cartId, cartItemId, quantity, HMAC, callback) {
    this.modify('CartTopSellers', cartId, cartItemId, quantity, HMAC, callback);
};

CartModify.prototype.cartNewReleases = function(cartId, cartItemId, quantity, HMAC, callback) {
    this.modify('CartNewReleases', cartId, cartItemId, quantity, HMAC, callback);
};

CartModify.prototype.allResponseGroups = function(cartId, cartItemId, quantity, HMAC, callback) {
    this.modify('Cart,CartSimilarities,CartTopSellers,CartNewReleases', cartId, cartItemId, quantity, HMAC, callback);  
};

exports.CartModify = CartModify;
