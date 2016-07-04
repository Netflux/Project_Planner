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
}

function onSearch() {
    entryList.add({title: "Search called.", isVisible: true}); // debug
}

function onNewEntry() {
    navigation.toEditEntryPage(-1, {
        title: "",
        description: "",
        isVisible: true
    });
}

function onSettings() {
    //navigation.toSettingsPage();
    entryList.add({title: "Settings called.", isVisible: true}); // debug
}

function onRefresh() {
    listViewElement.refresh();
}

function onViewEntry(args) {
    var entryIndex = args.index;
    navigation.toViewEntryPage(entryIndex, entryList.getItem(entryIndex));
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
