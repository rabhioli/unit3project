const express = require('express'); //we need this because we want to put into a variable form all of our routes so that they can be exported
const Event = require('../models/event');

const router = express.Router(); //router is the variable where will be putting in our routes. 


router.get('/', async (req, res) => {
    try {
       
        res.json(await Event.find({}))

    }catch(err){
        res.status(400).json(err);
    }
})
router.post('/', async (req, res) => {
    try {
        res.json(await Event.create(req.body))
    } catch (err) {
        res.status(400).json(err);
    }
})
router.delete('/:id', async (req, res) => {
    try {
        res.json(await Event.findByIdAndDelete(req.params.id))
    } catch (err) {
        res.status(400).json(err);
    }
})
router.get('/:id', async (req, res) => {
    try {
        res.json(await Event.findById(req.params.id))
    } catch (err) {
        res.status(400).json(err);
    }
})
router.put('/:id', async (req, res) => {
    try {

        res.json(await Event.findByIdAndUpdate(req.params.id, req.body))
    } catch (err) {
        res.status(400).json(err);
    }
})
 
module.exports = router;