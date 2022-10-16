const User = require("./User");
const Review = require("./Review");
const Comment = require("./Comment");

User.hasMany(Review, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

Review.hasMany(Comment, {
  foreignKey: "comment_id",
  onDelete: "CASCADE",
});

Review.belongsTo(User, {
  foreign_key: "id",
});

Comment.belongsTo(Review, {
  foreignKey: "review_id",
});

Comment.belongsTo(User, {
  foreignKey: "id",
});

module.exports = { User, Review, Comment };
