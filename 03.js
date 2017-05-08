var fs = require('fs');

function firstFile1(fileName){
	return	new Promise(function(resolve,reject){
		fs.readFile(fileName, 'utf8', (err, data) => {
	    if(err) {
	        return reject(err)
	     }
	     return resolve(data)
	    })
	});
}
firstFile1('Hello.txt')
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
});
firstFile1('Hello1.txt')
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
});
