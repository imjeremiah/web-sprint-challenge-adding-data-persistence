// build your `/api/projects` router here
const express = require('express');
const Project = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Project.getProjects()
        .then(projects => {
            res.json(projects)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Project.createProject(req.body)
        .then(project => {
            res.json(project)
        })
        .catch(next)
})

module.exports = router;