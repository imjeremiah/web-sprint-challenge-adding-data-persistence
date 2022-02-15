// build your `Task` model here
const db = require('../../data/dbConfig')

async function getTasks() {
    const tasks = await db('tasks as t')
    .leftJoin('projects as p', 'p.project_id', 't.project_id')
    .select('t.*', 'p.project_name', 'p.project_description')

    tasks.forEach(task => task.task_completed = !!task.task_completed);

    return tasks;
}

async function getbyId(id) {
    const [ task ] = await db('tasks').where('task_id', id);

    task.task_completed = !! task.task_completed;

    return task;
}

async function createTask(task) {
    const [ id ] = await db('tasks').insert(task);
    const newtask = await getbyId(id);

    return newtask;
}

module.exports = {
    getTasks,
    getbyId,
    createTask
}