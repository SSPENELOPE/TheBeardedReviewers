const { Comment, User, Review } = require("../../models")

User.hasMany(Review, {
  foreign_key: "",
  onDelete: "CASCADE",
});

Review.belongsTo(User, {
    foreignKey: "user_id",
})

Review.hasMany(Comment, {
    foreign_key: "review_id",
    onDelete: "CASCADE",
});


Comment.belongsTo(Review, {
    foreign_key: "",
});

module.exports = { User, Review, Comment };
