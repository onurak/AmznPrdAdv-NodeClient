var crypto = require('crypto');

var Signature = function() {

};

Signature.prototype.sign = function(params) {
    params['AWSAccessKeyId'] = config.amazon.awsId;
    params['Timestamp'] = this.generateTimestamp();

    var canonical = this.canonicalize(params);
    var stringToSign = [
        config.amazon.requestMethod,
        config.amazon.endPoint.toLowerCase(),
        config.amazon.baseUri,
        canonical
    ].join("\n");
    params['Signature'] = this.digest(stringToSign);

    return params;
};

Signature.prototype.pad = function(num) {
    return num < 10 ? '0' + num : '' + num;
};

Signature.prototype.generateTimestamp = function() {
    var now = new Date(),
        year = now.getUTCFullYear(),
        month = this.pad(now.getUTCMonth() + 1),
        day = this.pad(now.getUTCDate()),
        hours = this.pad(now.getUTCHours()),
        mins = this.pad(now.getUTCMinutes()),
        secs = this.pad(now.getUTCSeconds());
    return [year, month, day].join('-') + 'T' +
        [hours, mins, secs].join(':') + 'Z';
};

Signature.prototype.encodeURI = function(x) {
    return encodeURIComponent(x).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
};

Signature.prototype.digest = function(x) {
    var hmac = crypto.createHmac('sha256', config.amazon.awsSecret);
    hmac.update(x);
    return hmac.digest('base64');
};

Signature.prototype.canonicalize = function(params) {
    var parts = [];
    for (var key in params) {
        parts.push([this.encodeURI(key), this.encodeURI(params[key])].join('='));
    }
    return parts.sort().join('&');
};

exports.Signature = Signature;


