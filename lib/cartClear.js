var amazonClient = require('./amazonClient').AmazonClient;

var CartClear = function() {
    this.amazonRequest = new amazonClient();
};

CartClear.prototype.clearCart = function(cartId, HMAC, callback) {
    
    this.amazonRequest.execute('CartClear', {
                'CartId': cartId, 
                'HMAC' : HMAC
            }, callback);
};

exports.CartClear = CartClear;
