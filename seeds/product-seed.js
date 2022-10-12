const sequelize = require('../config/connection');
const Products = require('../models/Products');
const productData = require('./product-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Products.bulkCreate(productData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();