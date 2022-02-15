// build your `Project` model here
const db = require('../../data/dbConfig')

async function getProjects() {
    const projects = await db('projects');
    projects.forEach(project => project.project_completed = !!project.project_completed);
    return projects;
}

async function getById(id) {
    const [ project ] = await db('projects').where('project_id', id)

    project.project_completed = !!project.project_completed;

    return project;
}

async function createProject(project) {
    const [ id ] = await db('projects').insert(project);
    const newProject = await getById(id);

    return newProject;
}

module.exports = {
    getProjects,
    getById,
    createProject
}