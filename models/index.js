const User = require("./User");
const Review = require("./Review");
const Comment = require("./Comments");

Comment.belongsTo(Review, {
  foreignKey: 'review_id',
});

Review.hasMany(Comment, {
  foreignKey: "comment_id",
  onDelete: "CASCADE",
})

Comment.belongsTo(User, {
  foreignKey: "comment_id",
});

User.hasMany(Comment, {
  foreignKey: 'id',
  onDelete: 'CASCADE',
})

module.exports = { User, Review, Comment };
