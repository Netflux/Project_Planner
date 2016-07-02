// import required modules
var Observable = require("data/observable").Observable;
var navigation = require("../../controllers/navigation");
var EntryListModel = require("../../models/entrylist");

var entryList = new EntryListModel();
var listViewElement;

var page;
var pageData = new Observable({
    // bind dynamic values on page to backend
    entryList: entryList
});

function loaded(args) {
    page = args.object;
    page.bindingContext = pageData;

    // bind page elements to backend
    listViewElement = page.getViewById("listView");

    // load previous entries if they exist
    entryList.load();

    // debug
    entryList.add({
        title: "Item 1",
        description: "Description 1",
        isVisible: true
    });
    entryList.add({
        title: "Item 2",
        description: "Description 2",
        isVisible: true
    });
    entryList.add({
        title: "Item 3",
        description: "Description 3",
        isVisible: true
    });
}

function onSearch() {
    entryList.add({title: "Search called.", isVisible: true}); // debug
}

function onNewEntry() {
    //navigation.toNewEntry();
    entryList.add({title: "New Entry called.", isVisible: true}); // debug
}

function onSettings() {
    //navigation.toSettings();
    entryList.add({title: "Settings called.", isVisible: true}); // debug
}

function onRefresh() {
    listViewElement.refresh();
    entryList.add({title: "Refresh called.", isVisible: true}); // debug
}

function onViewEntry(args) {
    var entryIndex = args.index;
    //navigation.toViewEntry(entryList.getItem(entryIndex));
    entryList.add({title: "Entry called for " + entryIndex + ".", isVisible: true}); // debug
}

function onClearAll() {
    entryList.empty();
    entryList.save();
}

function onLoad() {
    entryList.load();
}

function onSave() {
    entryList.save();
}

module.exports = {
    loaded: loaded,
    onSearch: onSearch,
    onNewEntry: onNewEntry,
    onSettings: onSettings,
    onRefresh: onRefresh,
    onViewEntry: onViewEntry,
    onClearAll: onClearAll,
    onLoad: onLoad,
    onSave: onSave
};
