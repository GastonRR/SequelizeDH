const db = require('../database/models');
const Op = db.Sequelize.Op;

let moviesController = {
    allMovies: function (req,res){
        db.Movies.findAll()
        .then(movies =>{
            res.render('peliculas', {peliculas: movies,
                title: 'Todas las peliculas'});
        });
    },
   detailsMovies: function (req,res){
       let detailID = req.params.id;
        db.Movies.findByPk(detailID)
        .then(peliculaDetail => {
            res.render('detailMovie', { pelicula: peliculaDetail});
        });
    },
   news: function (req,res){
        db.Movies.findAll({
            order: [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
        .then(movies =>{
            res.render('news', {peliculas:movies});
        });
    },
    search: function (req,res){

        db.Movies.findAll({
            where: {
                title: {[Op.like]: '%'+ req.body.search +'%'}
            }
        }
        )
        .then(movies => {
            console.log(movies);
            if (movies != ''){
                console.log('1');
                res.render('peliculas', {peliculas: movies,
                    title: 'Todas las peliculas'});
            }
            return res.render('peliculas', {errors:{ msg:'No se encuentra la pelicula' },
             title: 'Todas las peliculas'});
        })
        // .catch(error =>{
        //     console.log(error);
        // });
    }
}

module.exports = moviesController;