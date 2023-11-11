/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('payments').del();

  // Inserts seed entries
  await knex('payments').insert([
    {
      user_id: 1, // ganti dengan user_id yang sesuai
      field_id: 1, // ganti dengan field_id yang sesuai
      amount: 350_000.00,
      payment_date: '2023-11-01 14:00:00',
      payment_method: 'Credit Card',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      user_id: 2, // ganti dengan user_id yang sesuai
      field_id: 2, // ganti dengan field_id yang sesuai
      amount: 300_000.00,
      payment_date: '2023-11-02 16:00:00',
      payment_method: 'PayPal',
      created_at: new Date(),
      updated_at: new Date()
    }
    // Tambahkan entri lain sesuai kebutuhan
  ]);
};
