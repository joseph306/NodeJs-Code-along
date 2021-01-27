const express = require('express');

const app = express();
let port = 4000;

app.listen(port, function(){
    console.log('Server is listening on localhost:%s', port);
});

app.use(express.static(__dirname));