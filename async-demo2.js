const fs = require('fs');

fs.readdir('/', function(err, data){
    console.log ('data: ', data);
});

console.log('This code is last');