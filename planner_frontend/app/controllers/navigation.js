// import required modules
var frameModule = require("ui/frame");

function toHomePage() {
    frameModule.topmost().navigate("views/home/home");
}

function toBack() {
    frameModule.topmost().goBack();
}

function toSettingsPage() {
    frameModule.topmost().navigate("views/settings/settings");
}

function toViewEntryPage(entryIndex, entryItem) {
    var navigationData = {
        moduleName: "views/view-entry/view-entry",
        context: {
            entryIndex: entryIndex,
            entryItem: entryItem
        },
        backStackVisible: false
    };

    frameModule.topmost().navigate(navigationData);
}

function toEditEntryPage(entryIndex, entryItem) {
    var navigationData = {
        moduleName: "views/edit-entry/edit-entry",
        context: {
            entryIndex: entryIndex,
            entryItem: entryItem
        },
        backStackVisible: false
    };

    frameModule.topmost().navigate(navigationData);
}

module.exports = {
    toHomePage: toHomePage,
    toBack: toBack,
    toSettingsPage: toSettingsPage,
    toViewEntryPage: toViewEntryPage,
    toEditEntryPage: toEditEntryPage
}
