
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// Products belongsTo Category
  // Categories have many Products

  // Products belongToMany Tags (through ProductTag)

  // Tags belongToMany Products (through ProductTag)
class Product extends Model { }
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);


  module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
  };
