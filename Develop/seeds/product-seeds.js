const { Product } = require('./models');

const productData = [
  {
    product_name: 'Gucci Purse',
    price: 599.99,
    stock: 8,
    category_id: 1,
  },
  {
    product_name: 'Prada Wallet',
    price: 799.0,
    stock: 15,
    category_id: 5,
  },
  {
    product_name: 'Versace Shoes',
    price: 329.99,
    stock: 20,
    category_id: 4,
  },
  {
    product_name: 'Dolce & Gabbana Swimsuit',
    price: 149.99,
    stock: 35,
    category_id: 3,
  },
  {
    product_name: 'Burberry Skarf',
    price: 279.99,
    stock: 18,
    category_id: 2,
  },
];


const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;