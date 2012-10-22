var express = require('express');

module.exports.boot = function (app) {
    
   app.configure(function() {
    	app.use(express.logger());
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(express.cookieParser());
        app.use(express.session({ secret: "amazonsession" }));
        app.set("view options", {layout: false});
    	app.use(app.router);
        app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    });

};