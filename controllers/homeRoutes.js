const router = require('express').Router();
const { Reviews, User, Comment, Products } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
      const reviewsData = await Reviews.findAll({
        include: [
          {
            model: User,
            attributes: ['name', 'email'],
          },
      /*     {
            model: Products,
            attributes: ['id', 'product_type', 'description']
          }, */
          {
            model: Reviews,
            attributes: ['title','description']
          },
          {
            model: Comment,
            attributes: ['id','body','rating']
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
      const reviewsData = await Reviews.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['name'],
          },
          ,
          {
            model: Products,
            attributes: ['id', 'product_type', 'description']
          },
          {
            model: Reviews,
            attributes: ['title','description']
          },
          {
            model: Comments,
            attributes: ['id','body','rating']
          }
        ],
      });
  
      const review = reviewsData.get({ plain: true });
  
      res.render('reviews', {
        ...review,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;