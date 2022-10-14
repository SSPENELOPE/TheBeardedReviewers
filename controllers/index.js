const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const reviewRoutes = require("./api/reviewRoutes");
const commentRoutes = require("./api/commentRoutes");


router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/review", reviewRoutes);
router.use("/comment", commentRoutes);

module.exports = router;
