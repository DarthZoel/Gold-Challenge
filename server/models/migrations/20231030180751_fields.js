/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('fields', function(table) {
        table.increments('field_id').primary();
        table.string('field_name').notNullable();
        table.string('field_description').notNullable();
        table.string('location').notNullable();
        table.string('image_url').notNullable();
        table.decimal('price_per_hour', 10, 2).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('fields');
};
