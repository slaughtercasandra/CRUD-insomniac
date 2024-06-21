const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'purse',
  },
  {
    tag_name: 'wallet',
  },
  {
    tag_name: 'shoe',
  },
  {
    tag_name: 'swim',
  },
  {
    tag_name: 'skarf',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;