/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('reviews', function(table) {
        table.increments('review_id').primary();
        table.integer('user_id').unsigned().notNullable();
        table.integer('field_id').unsigned().notNullable();
        table.text('review_text').notNullable();
        table.integer('rating').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());    
        table.foreign('user_id').references('user_id').inTable('users');
        table.foreign('field_id').references('field_id').inTable('fields');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('reviews');
};
