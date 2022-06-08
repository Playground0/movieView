const express = require('express');


let app = express();

app.use(express.static(__dirname+'/dist/movie-view'));

app.get('/*',(req, res) => {
    res.sendFile(__dirname+'/dist/movie-view/index.html')
});

app.listen(process.env.PORT || 8000);