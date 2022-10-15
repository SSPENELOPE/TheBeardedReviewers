const router = require('express').Router();
const { Review, User, Comment } = require('../models');
/* const withAuth = require('../utils/auth'); */


router.get('/', async (req, res) => {
    try {
      const reviewsData = await Review.findAll({
        include: [
          {
            model: Comment,
            attributes: ['id','body','rating'],
            include: [User]
          }
        ],
      });

      const reviews = reviewsData.map((review) => review.get({ plain: true }));

      res.render('homepage', { 
        reviews, 
        logged_in: req.session.logged_in   
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/reviews/:id', async (req, res) => {
    try {
      const reviewsData = await Review.findByPk(req.params.id, {
/*         include: [
          {
            model: User,
            attributes: ['name'],
          },
          {
            model: Comment,
            attributes: ['id','body','rating']
          }
        ], */
      });
  
      const review = reviewsData.get({ plain: true });
  
      res.render('review', {
        ...review,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;