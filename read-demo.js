const fs = require('fs');

fs.readFile('./data.json', function(err, data){
    data = JSON.parse(data);
    console.log(data.name);
})