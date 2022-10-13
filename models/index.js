const User = require("./User");
const Review = require("./Review");

Review.belongsTo(User, {
  foreignKey: "id",
});

module.exports = { User, Review };
