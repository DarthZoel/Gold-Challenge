/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('fields').del();
  // Inserts seed entries
  return await knex('fields').insert([
    { 
      field_name: 'Santiago Bernabeu', 
      field_description: 'Description for Field A', 
      location: 'Jl. Simatupang No. 1', 
      image_url: 'https://c1.wallpaperflare.com/preview/176/564/857/stadium-prato-green-meadow-turf.jpg', 
      price_per_hour: 350000.00 
    },
    { 
      field_name: 'Camp Nou', 
      field_description: 'Description for Field B', 
      location: 'Jl. Bangun Cipta No. 2', 
      image_url: 'https://c4.wallpaperflare.com/wallpaper/837/385/136/barcelona-fc-barcelona-stadium-camp-nou-wallpaper-preview.jpg', 
      price_per_hour: 300000.00 
    },
    { 
      field_name: 'Old Trafford', 
      field_description: 'Description for Field C', 
      location: 'Jl. Angan No. 3', 
      image_url: 'https://c4.wallpaperflare.com/wallpaper/730/927/777/manchester-united-old-trafford-red-devil-wallpaper-preview.jpg', 
      price_per_hour: 200000.00 
    },
    { 
      field_name: 'Etihad Stadium', 
      field_description: 'Description for Field C', 
      location: 'Jl. Kayu Putih No. 4', 
      image_url: 'https://c1.wallpaperflare.com/preview/905/530/554/manchester-city-etihad-stadium-stadium-football.jpg', 
      price_per_hour: 250000.00 
    }
  ]);
};
