const User = require("./User");
<<<<<<< HEAD
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
=======
const Reviews = require("./Review");
const Comment = require("./Comments");


Comment.belongsTo(User, {
  foreignKey: "comment_id",
});

User.hasMany(Comment, {
  foreignKey: 'id',
  onDelete: 'CASCADE',
})

module.exports = { User, Reviews, Comment };
>>>>>>> main
