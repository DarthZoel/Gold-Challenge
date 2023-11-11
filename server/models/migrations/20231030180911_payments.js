/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('payments', function(table) {
        table.increments('payment_id').primary();
        table.integer('user_id').unsigned().notNullable();
        table.integer('field_id').unsigned().notNullable();
        table.decimal('amount', 10, 2).notNullable();
        table.timestamp('payment_date').notNullable();
        table.string('payment_method').notNullable();
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
    return knex.schema.dropTable('payments');
};
