require('dotenv').config();
const express = require('express');



const app = express();

app.get('/', (req, res) => (
    res.send('meow world')
))




const PORT = process.env.PORT
app.listen(3000, () => console.log(`meowing to port 3000`))