const User = require("../../models/User");
const Review = require("../../models/Review");

User.hasMany(Review, {
  foreign_key: "",
  onDelete: "CASCADE",
});

module.exports = { User, Review };
