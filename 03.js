var fs = require('fs');

var myFirstFilePromise = new Promise(function(resolve, reject) {
  fs.readFile('Hello.txt', 'utf8', (err, data) => {
    if (err) {
      reject(err);
    }
    resolve(data);
  });
  return new Promise(function(resolve, reject) {
    fs.readFile('Hello1.txt', 'utf8', (err, data1) => {
      if (err) {
        reject(err);
      }
      resolve(data1);
    });
  });
});
