// import required modules
var Observable = require("data/observable").Observable;
var navigation = require("../../controllers/navigation");
var page;

function loaded(args) {
    page = args.object;
    page.bindingContext = page.navigationContext;
}

function onBack() {
    navigation.toBack();
}

module.exports = {
    loaded: loaded,
    onBack: onBack
};
