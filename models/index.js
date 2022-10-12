// Product has Many Reviews
// Users has Many Product*
// Product Belongs to User
// Review Belongs to User
// Comment Belongs to User // Comment is an attribute of the Reviews object
// User has Many Comments

const User = require("./User");
const Reviews = require("./Reviews");
const Products = require("./Products");
const Comments = require("./Comments");

Products.hasMany(Reviews, {
  foreignKey: "id",
});

Products.hasMany(Comments, {
  foreignKey: "id",
});

User.hasMany(Products, {
  foreignKey: "id",
});

Products.belongsTo(User, {
  foreignKey: "id",
});

Reviews.belongsTo(User, {
  foreignKey: "id",
});

module.exports = { User, Reviews, Products, Comments };
