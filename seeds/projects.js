exports.seed = async function(knex) {
	await knex("projects").insert([   
		{ name: "Sprint 1 Web", description: "practice web", completed: true },
    { name: "Sprint 2 JS", description: "practice js", completed: false },
    { name: "Sprint 3 React", description: "practice react", completed: false },
    { name: "Sprint 4 Redux", description: "practice redux", completed: false },,
	])
}
