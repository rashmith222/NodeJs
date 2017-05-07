var fs = require('fs');
fs.readFile('Hello.txt', (err, data) => {
  if (err) console.log(err);
  console.log(data);
});
fs.readFile('Hello1.txt', (err, data) => {
  if (err) console.log(err);
  console.log(data);
});
