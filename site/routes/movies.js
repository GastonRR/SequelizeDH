var express = require('express');
var router = express.Router();
var moviesController = require('../controllers/moviesController')

/* routes Movies. */
router.get('/', moviesController.allMovies);
router.get('/detail/:id', moviesController.detailsMovies);
router.get('/new', moviesController.news);
router.post('/search', moviesController.search);

module.exports = router;
