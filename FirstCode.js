var fs = require('fs');
fs.readFile('Hello.txt','utf8', (err, data) => {
  if (err) console.log(err);
  console.log(data);
  fs.readFile('Hello1.txt','utf8', (err, data) => {
  	if (err) console.log(err);
  	console.log(data);
   });
});
