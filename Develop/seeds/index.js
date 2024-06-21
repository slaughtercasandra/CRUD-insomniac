const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATS SYNCED -----\n');
  await seedProducts();
  console.log('\n----- PROS SYNCED -----\n');
  await seedTags();
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedProductTags();
  console.log('\n----- DATABASE SYNCED -----\n');
  process.exit(0);
};

seedAll();