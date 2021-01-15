const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'Build')));

app.get('*', (req, res) => {
    console.log("request made")
    res.sendFile(path.join(__dirname+'/Build/index.html'));
});
const port = process.env.PORT || 5000;
app.listen(port,()=>console.log("listening on port: " + port));