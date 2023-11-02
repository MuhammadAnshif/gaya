const express = require('express');
const app = express();
const path = require('path');


require('dotenv').config();
const port = process.env.PORT;

app.use(express.static(__dirname + "/public"));

const publicDirectory = path.join(__dirname, 'veiws');

app.get('/', (req, res) => {
    res.sendFile('home.html', { root: publicDirectory });
  });

app.listen(port, () => {
    console.log('server is running:',port)
 });
