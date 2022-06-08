const express = require('express');


let app = express();

app.use(express.static(__dirname+'/dist/moviewview'));

app.get('/*',(req, res) => {
    res.sendFile(__dirname+'/dist/movieview/index.html')
});

app.listen(process.env.PORT || 8000);