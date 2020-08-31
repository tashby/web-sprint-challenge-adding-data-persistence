const db = require("./data/config")

function find() {
	return db("projects")
}

function addProject(project) {
  return db("projects")
    .insert(project, "id")
}

function findResources() {
	return db("resources")		
}

function addResources(resource) {
  return db("resources")
    .insert(resource, "id")
}

function findTasks(id) {
	return db("tasks")
    .leftJoin("projects", "projects.name", "projects.description")
    .where("tasks.project_id", id)	
    .select("tasks.project_id","tasks.description", "projects.name as project_name", "projects.description as project_description","tasks.completed")	
}


function addTasks(tasks) {
  return db("tasks")
    .insert(tasks, "id")
}



module.exports = {
	find, addProject, findResources, addResources, findTasks, addTasks
}