var fs = require('fs');

var myFirstPromise = new Promise(function(resolve,reject){
  fs.readFile('Hello.txt', 'utf8', (err, data) => {
      if(err) {
        return reject(err)
      }
      return resolve(data)
    })
});
myFirstPromise.then(function(data){
    console.log(data);
}).catch(function(err){
    console.error(err);
});
