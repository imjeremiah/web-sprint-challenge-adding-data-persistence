const project_resources = [
  { project_id: 2, resource_id: 1},
  { project_id: 2, resource_id: 2},
  { project_id: 1, resource_id: 3},
  { project_id: 2, resource_id: 4},
  { project_id: 1, resource_id: 5},
  { project_id: 1, resource_id: 4},
]

exports.project_resources = project_resources

exports.seed = function (knex, Promise) { // eslint-disable-line
  return knex('project_resources').insert(project_resources)
}
