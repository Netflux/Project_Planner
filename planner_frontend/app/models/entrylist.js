// import required modules
var FileSystem = require("file-system");
var ObservableArray = require("data/observable-array").ObservableArray;

function EntryList() {
    var list = new ObservableArray([]);

    list.load = function() {
        var path = FileSystem.knownFolders.documents();
        var file = path.getFile("entries.txt");

        try {
            // read list data from file
            file.readText()
                .then(function(content) {
                    // if file loads, parse list object
                    list.empty();
                    JSON.parse(content).forEach(function(element, index, array) {
                        list.add(element);
                    });
                    return true;
                }, function(error) {
                    // if file fails to load, return false
                    console.error(error);
                    return false;
                });
        }
        catch(e) {
            console.error(e);
            return false;
        }
    }

    list.save = function() {
        var path = FileSystem.knownFolders.documents();
        var file = path.getFile("entries.txt");
        var tempArray = [];

        // store all entries in temporary array
        // stringify'ing the original array is not possible due to circular structure
        list.forEach(function(element, index, array) {
            tempArray.push(element);
        });

        try {
            // write list data to file
            file.writeText(JSON.stringify(tempArray))
                .then(function() {
                    // if file saves, return true
                    return true;
                }, function(error) {
                    // if file fails to save, return false
                    console.error(error);
                    return error;
                });
        }
        catch(e) {
            console.error(e);
            return false;
        }
    }

    list.empty = function() {
        // pop each entry off the list
        while(list.length) {
            list.pop();
        }
    }

    list.add = function(item) {
        // push new entry to list, then sort according to date
        list.push(item);
        /*list.sort(function(a, b) {
            return a.date - b.date;
        });*/
    }

    list.remove = function(index) {
        // remove entry at specified index
        list.splice(index, 1);
    }

    return list;
}

module.exports = EntryList;
