// build your `/api/resources` router here
const express = require('express');
const Resource = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Resource.getResources()
        .then(resources => {
            res.json(resources)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Resource.createResource(req.body)
        .then(resource => {
            res.json(resource)
        })
        .catch(next)
})

module.exports = router;