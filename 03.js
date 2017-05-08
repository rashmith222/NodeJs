var fs = require('fs');

var myFirstFilePromise = new Promise(function(resolve, reject) {
  fs.readFile('Hello.txt', 'utf8', (err, data) => {
    if (err) {
      reject(err);
    }
    resolve(data);
  });
});
myFirstFilePromise
  .then(function(data1) {
    console.log(data1);
  })
  .catch(function(err) {
    console.error(err);
  });
var mySecondFilePromise = new Promise(function(resolve, reject) {
  fs.readFile('Hello1.txt', 'utf8', (err, data1) => {
    if (err) {
      reject(err);
    }
    resolve(data1);
  });
});
mySecondFilePromise
  .then(function(data1) {
    console.log(data1);
  })
  .catch(function(err) {
    console.error(err);
  });
