
exports.up = async function(knex) {
    await knex.schema.createTable("projects", (table) => {
         table.increments("id")
         table.text("name").notNull()
         table.text("description")
         table.boolean("completed").defaultTo("false").notNull()
 
     })
       await knex.schema.createTable("tasks", (table) => {
         table.increments("id")
         table.text("description").notNull()
         table.text("notes")
         table.integer("project_id").references("id").inTable("projects")
         table.boolean("completed").defaultTo("false").notNull()
 
     })
 
        await knex.schema.createTable("resources", (table) => {
         table.increments("id")
         table.text("name").notNull()
         table.text("description")
     })
 
     await knex.schema.createTable("project_resources", (table) => {
         table.integer("project_id").references("id").inTable("projects")
         table.integer("resource_id").references("id").inTable("resources")
     })
 };
 
 exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("project_resources")
     await knex.schema.dropTableIfExists("resources")
     await knex.schema.dropTableIfExists("tasks")
     await knex.schema.dropTableIfExists("projects")
 };
 