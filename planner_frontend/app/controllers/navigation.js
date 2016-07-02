// import required modules
var frameModule = require("ui/frame");

function toHomePage() {
    frameModule.topmost().navigate("views/home/home");
}

function toBack() {
    frameModule.topmost().goBack();
}

function toNewEntryPage() {
    var navigationData = {
        moduleName: "views/new-entry/new-entry",
        backStackVisible: false
    };

    frameModule.topmost().navigate(navigationData);
}

function toSettingsPage() {
    frameModule.topmost().navigate("views/settings/settings");
}

function toViewEntryPage(entryItem) {
    var navigationData = {
        moduleName: "views/view-entry/view-entry",
        context: entryItem,
        backStackVisible: false
    };

    frameModule.topmost().navigate(navigationData);
}

function toEditEntryPage(entryItem) {
    var navigationData = {
        moduleName: "views/edit-entry/edit-entry",
        context: entryItem,
        backStackVisible: false
    };

    frameModule.topmost().navigate(navigationData);
}

module.exports = {
    toHomePage: toHomePage,
    toBack: toBack,
    toNewEntryPage: toNewEntryPage,
    toSettingsPage: toSettingsPage,
    toViewEntryPage: toViewEntryPage,
    toEditEntryPage: toEditEntryPage
}
