const User = require("./User");
const Review = require("./Review");
const Comment = require("./Comment");

Review.belongsTo(User, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

User.hasMany(Review, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

User.hasMany(Comment, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

Comment.belongsTo(Review, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

Review.hasMany(Comment, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

module.exports = { User, Review, Comment };
