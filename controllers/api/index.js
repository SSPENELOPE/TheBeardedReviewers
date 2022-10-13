const User = require("../../models/User");
const Products = require("../../models/Products");
const Reviews = require("../../models/Reviews");
const Comments = require("../../models/Comments");

User.hasMany(Reviews, {
  foreign_key: "",
  onDelete: "CASCADE",
});

Reviews.hasMany(Comments, {
    foreign_key: "",
    onDelete: "CASCADE",
});

Products.belongsTo(Reviews, {
    foreign_key: "",
    onDelete: "CASCADE",
});

Reviews.belongsTo(Products, {
    foreign_key: "",
    onDelete: "CASCADE",
});

Comments.belongsTo(Reviews, {
    foreign_key: "",
    onDelete: "CASCADE",
});

module.exports = { User, Products, Reviews, Comments };
