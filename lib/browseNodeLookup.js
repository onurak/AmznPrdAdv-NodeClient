var amazonClient = require('./amazonClient').AmazonClient;

var BrowseNodeLookup = function() {
    this.amazonRequest = new amazonClient();
};

BrowseNodeLookup.prototype.lookup = function(responseGroup, browseNodeId, callback) {
    
    this.amazonRequest.execute('BrowseNodeLookup', {
                'BrowseNodeId': browseNodeId, 
                'ResponseGroup' : responseGroup 
            }, callback);
};

BrowseNodeLookup.prototype.browseNodeInfo = function(browseNodeId, callback) {
    this.lookup('BrowseNodeInfo', browseNodeId, callback);
};

BrowseNodeLookup.prototype.mostGifted = function(browseNodeId, callback) {
    this.lookup('MostGifted', browseNodeId, callback);
};

BrowseNodeLookup.prototype.newReleases = function(browseNodeId, callback) {
    this.lookup('NewReleases', browseNodeId, callback);
};

BrowseNodeLookup.prototype.mostWishedFor = function(browseNodeId, callback) {
    this.lookup('MostWishedFor', browseNodeId, callback);
};

BrowseNodeLookup.prototype.topSellers = function(browseNodeId, callback) {
    this.lookup('TopSellers', browseNodeId, callback);
};

BrowseNodeLookup.prototype.allResponseGroups = function(browseNodeId, callback) {
    this.lookup('BrowseNodeInfo,MostGifted,NewReleases,MostWishedFor,TopSellers', browseNodeId, callback);  
};

exports.BrowseNodeLookup = BrowseNodeLookup;
