require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const EventRouter = require('./controller/event') //new

const app = express();

//middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())


//routes
app.use('/event', EventRouter);
app.get('/', (req, res) => (
    res.send('meow world')
))




const PORT = process.env.PORT
app.listen(3000, () => console.log(`meowing to port 3000`))