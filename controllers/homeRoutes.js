const router = require("express").Router();
const { Review, User } = require("../models");
/* const withAuth = require('../utils/auth'); */

router.get("/", async (req, res) => {
  try {
    const reviewsData = await Review.findAll({});

    const reviews = reviewsData.map((review) => review.get({ plain: true }));

    res.render("homepage", {
      reviews,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

// GET profile of all user reviews
router.get("/profile/:id", async (req, res) => {
  try {
    const profileData = await User.findByPk(req.params.id, {
      include: [
        { model: Review, attributes: ["title", "description", "date_created"] },
      ],
    });

    const profile = profileData.get({ plain: true });

    res.render("profile", {
      ...profile,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one review
router.get("/review/:id", async (req, res) => {
  try {
    const reviewData = await Review.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        { model: Review, attributes: ["title", "description", "date_created"] },
      ],
    });

    const review = reviewData.get({ plain: true });

    res.render("review", {
      ...review,
      // logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
