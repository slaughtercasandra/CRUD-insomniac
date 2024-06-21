const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Purses',
  },
  {
    category_name: 'Wallets',
  },
  {
    category_name: 'Shoes',
  },
  {
    category_name: 'Swim',
  },
  {
    category_name: 'Accessories',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;