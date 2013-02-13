function SomeAPIHandler(options) {
    var defaults = {
        // default parameters for SomeAPIHandler
        host: 'localhost',
        port: 8080,
        protocol: 'http'
    };
    this.settings = $.extend({}, defaults, options);
}
SomeAPIHandler.prototype = {
    getAddress:function() {
        return this.settings.protocol + '://' + this.settings.host + ':' + this.settings.port;
    }
};

// now we can create new SomeAPIHandler objects without passing all parameters.
var handler = new SomeAPIHandler({host: 'example.com'});
$('.results').html('address: ' + handler.getAddress());
