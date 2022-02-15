// build your `/api/tasks` router here
const express = require('express');
const helpers = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    helpers.getTasks()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    helpers.createTask(req.body)
        .then(task => {
            res.json(task)
        })
        .catch(next)
})

module.exports = router;