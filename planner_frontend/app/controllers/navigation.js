// import required modules
var frameModule = require("ui/frame");

module.exports = {
    toHomePage: function() {
        frameModule.topmost().navigate("views/home/home");
    }
}
