const { Product } = require('../models');

const productData = [
  {
    product_name: 'Gucci Purse',
    price: 599.99,
    stock: 21,
    category_id: 1,
  },
  {
    product_name: 'Prada Wallet',
    price: 7500.0,
    stock: 1,
    category_id: 5,
  },
  {
    product_name: 'Versace Shoes',
    price: 329.79,
    stock: 0,
    category_id: 4,
  },
  {
    product_name: 'Dolce & Gabbana Swimsuit',
    price: 349.59,
    stock: 45,
    category_id: 3,
  },
  {
    product_name: 'Burberry Skarf',
    price: 276.99,
    stock: 68,
    category_id: 2,
  },
];


const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;