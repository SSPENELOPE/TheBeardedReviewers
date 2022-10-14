const User = require("./User");
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
