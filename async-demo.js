const fs = require('fs');

function phonenumber(err, data){
    console.log ('data: ', data);
}

fs.readdir('/' , phonenumber);

console.log('This code is last');