exports.seed = async function(knex) {
	await knex("resources").insert([   
		{ name: "Resource 1", description: "Computer"},
	  { name: "Resource 2", description: "Keyboard"},
	])
}
