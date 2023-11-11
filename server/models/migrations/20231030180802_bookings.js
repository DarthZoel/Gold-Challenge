/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('bookings', function(table) {
    table.increments('booking_id').primary();
    table.integer('user_id').unsigned().notNullable();
    table.integer('field_id').unsigned().notNullable();
    table.timestamp('start_time').notNullable();
    table.timestamp('end_time').notNullable();
    table.decimal('total_price', 10, 2).notNullable();
    table.date('booking_date').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.foreign('user_id').references('user_id').inTable('users');
    table.foreign('field_id').references('field_id').inTable('fields');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('bookings');
};
