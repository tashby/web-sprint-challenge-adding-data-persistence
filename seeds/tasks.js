exports.seed = async function(knex) {
	await knex("tasks").insert([   
		{ description: "Task 1 Start", project_id: 1 ,completed: false},
	  { description: "Task 2 Finish", project_id:2, completed: false},
	])
}
