const express = require('express');
const app = express();
const fs = require('fs');
const port = 8888;

app.listen(port, function(){
    console.log('Server is listening on localhost:%s', port);
});

app.use('/users', function(req, res) {
    fs.readFile('data.json', 'utf-8', function(err,data){
        res.send(data);
    })
});

app.use('/users', function(req, res){
    
})