// import required modules
var frameModule = require("ui/frame");

function toHomePage() {
    frameModule.topmost().navigate("views/home/home");
}

function toNewEntry() {
    var navigationData = {
        moduleName: "views/new-entry/new-entry",
        backStackVisible: false
    };

    frameModule.topmost().navigate(navigationData);
}

function toSettings() {
    frameModule.topmost().navigate("views/settings/settings");
}

function toViewEntry(entryItem) {
    var navigationData = {
        moduleName: "views/view-entry/view-entry",
        context: {entry: entryItem},
        backStackVisible: false
    };

    frameModule.topmost().navigate(navigationData);
}

module.exports = {
    toHomePage: toHomePage,
    toNewEntry: toNewEntry,
    toSettings: toSettings,
    toViewEntry: toViewEntry
}
