var fs = require('fs');

function readfilepromised(filename) {
  return new Promise(function(resolve, reject) {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

var myFirstFilePromise = new Promise(function(resolve, reject) {
  fs.readFile('Hello.txt', 'utf8', (err, data) => {
    if (err) {
      reject(err);
    }
    resolve(data);
  });
});
myFirstFilePromise
  .then(function(data) {
    console.log(data);
    return readfilepromised('Hello1.txt');
  })
  .then(function(data1) {
    console.log(data1);
  });
