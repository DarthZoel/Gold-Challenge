/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('reviews').del();

  // Inserts seed entries
  await knex('reviews').insert([
    {
      user_id: 1, // ganti dengan user_id yang sesuai
      field_id: 1, // ganti dengan field_id yang sesuai
      review_text: 'Pengalaman yang luar biasa, fasilitas sangat bagus!',
      rating: 5,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      user_id: 2, // ganti dengan user_id yang sesuai
      field_id: 2, // ganti dengan field_id yang sesuai
      review_text: 'Lapangan yang bagus dengan harga terjangkau.',
      rating: 4,
      created_at: new Date(),
      updated_at: new Date()
    }
    // Tambahkan entri lain sesuai kebutuhan
  ]);
};
