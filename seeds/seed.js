const sequelize = require("../config/connection");
const { User, Reviews, Comment } = require("../models");

const userData = require("./userData.json");
/* const productData = require("./productData.json"); */
const reviewData = require("./reviewData.json");
const commentData = require("./commentData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

/*   for (const product of productData) {
    await Products.create({
      ...product,
      product_type: product.type,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  } */
  for (const review of reviewData) {
    await Reviews.create({
      ...review,
      description: review.description,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const comment of commentData) {
    await Comment.create({
      ...comment,
      body: comment.body,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
