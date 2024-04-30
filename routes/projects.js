const express = require('express');
const router = express.Router();
const Project = require('../models/project');

// Register project
router.post('/register', async (req, res) => {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json({ message: 'Project registered', project: newProject });
});

// View all projects
router.get('/', async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
});

module.exports = router;
