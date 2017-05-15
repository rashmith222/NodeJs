var fs = require('fs');
var arr = ['Hello.txt', 'Hello1.txt', 'Hello2.txt'];
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
Promise.all(['Hello.txt', 'Hello1.txt', 'Hello2.txt']).then(data => {
  readfilepromised(data);
  console.log(data1);
});
