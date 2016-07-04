// import required modules
var Observable = require("data/observable").Observable;
var navigation = require("../../controllers/navigation");
var EntryListModel = require("../../models/entrylist");

var entryList = new EntryListModel();
var page;

function loaded(args) {
    page = args.object;
    page.bindingContext = page.navigationContext.entryItem;

    // load entries and store index of item if it already exists
    entryList.load();
}

function onBack() {
    navigation.toBack();
}

function onSave() {
    // override exisiting entry, else add as a new entry
    if(page.navigationContext.entryIndex == -1) {
        entryList.add(page.bindingContext);
    }
    else {
        entryList.setItem(page.navigationContext.entryIndex, page.bindingContext);
    }

    // save entry and return to home page
    entryList.save();
    navigation.toHomePage();
}

module.exports = {
    loaded: loaded,
    onBack: onBack,
    onSave: onSave
};
