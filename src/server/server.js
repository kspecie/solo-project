const express = require('express')
const app = express();
const port = 3000;
const path = require('path');
const distPath = path.resolve(__dirname, '../../dist');

app.use(express.static(distPath));

//app.use('/', express.static(path.resolve(__dirname, '../../dist/bundle.js')));


app.listen(port, () => {
    console.log("Server is listening on Port3000")
});