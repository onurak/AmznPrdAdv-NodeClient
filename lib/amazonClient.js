var Signature = require('./signature').Signature,
    http = require('http'),
    xml2js = require('xml2js');

var AmazonClient = function() {
    this.parser    = new xml2js.Parser();
};

AmazonClient.prototype.execute = function(operation, params, callback) {
    
    params.Service = config.amazon.service;
    params.Version = config.amazon.version;
    params.Operation = operation;
    params.AWSAccessKeyId = config.amazon.awsId;
    params.AssociateTag = config.amazon.assocId;
    
    var signature = new Signature();
    params = signature.sign(params);
    
    var parser = this.parser;
    var queryString = signature.canonicalize(params);
    var uri = config.amazon.baseUri + '?' + queryString;
    var host = config.amazon.endPoint;
    
    var request = http.createClient(80, host).request('GET', uri, {'host':host});
    request.end();
    
    request.addListener('response', function(response) {
        var responseBody = '';
        response.addListener('data', function(chunk) {
            responseBody = responseBody + chunk;
        });
        response.addListener('end', function() {
            var statusCode = response.statusCode == 200 ? null : response.statusCode;
            parser.addListener('end', function(result) {
                callback(statusCode, result);
                parser.removeAllListeners('end');
            });
            parser.parseString(responseBody);
        });
        response.setEncoding('utf8');
    });
};

exports.AmazonClient = AmazonClient;
