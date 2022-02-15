// build your `Resource` model here
const db = require('../../data/dbConfig')

function getResources() {
    return db('resources');
}

async function getById(id) {
    const [ resource ] = await db('resources').where('resource_id', id)

    return resource;
}

async function createResource(resource) {
    const [ id ] = await db('resources').insert(resource);
    
    const newResource = await getById(id)

    return newResource;
}

module.exports = {
    getResources,
    getById,
    createResource
}