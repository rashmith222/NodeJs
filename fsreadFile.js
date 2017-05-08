var fs = require("fs");

var p = "./"
fs.readdir(p, function (err, files) {
    if (err) {
        throw err;
    }
    files.forEach(function (file) {
        console.log(file);
    });
});
