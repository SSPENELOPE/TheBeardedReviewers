<<<<<<< HEAD
const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;
=======
const router = require('express').Router();

const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);

module.exports = router;
>>>>>>> main
