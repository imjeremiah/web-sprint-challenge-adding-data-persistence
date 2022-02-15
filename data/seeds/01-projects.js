const projects = [
  { project_name: "Create an API", project_description: "make a backend using node and express", project_completed: true },
  { project_name: "Make a React App", project_description: "make a front end", project_completed: false }
]

exports.projects = projects

exports.seed = function (knex, Promise) { // eslint-disable-line
  return knex('projects').insert(projects)
}
