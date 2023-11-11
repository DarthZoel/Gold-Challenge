/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('availability', function(table) {
        table.increments('availability_id').primary();
        table.integer('field_id').unsigned().notNullable();
        table.timestamp('start_time').notNullable();
        table.timestamp('end_time').notNullable();    
        table.foreign('field_id').references('field_id').inTable('fields');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('availability');
};
