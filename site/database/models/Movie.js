module.exports = (sequelize,dataTypes) => {
    let alias = "Movies"
    let cols ={
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        title:{
            type: dataTypes.STRING
        },
        awards:{
            type: dataTypes.INTEGER

        },
        release_date:{
            type: dataTypes.DATE

        },
        length:{
            type: dataTypes.INTEGER
        },
        genre_id:{
            type: dataTypes.INTEGER
        }
    };
    let config ={
        tableName: "movies",
        timestamps: false
    }


    const Movie = sequelize.define(alias, cols, config);
    return Movie;
}