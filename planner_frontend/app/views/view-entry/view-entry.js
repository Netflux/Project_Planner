// import required modules
var Observable = require("data/observable").Observable;
var navigation = require("../../controllers/navigation");

var page;

function loaded(args) {
    page = args.object;
    page.bindingContext = page.navigationContext.entryItem;
}

function onBack() {
    navigation.toBack();
}

function onEdit() {
    navigation.toEditEntryPage(page.navigationContext.entryIndex, page.navigationContext.entryItem);
}

module.exports = {
    loaded: loaded,
    onBack: onBack,
    onEdit: onEdit
};
