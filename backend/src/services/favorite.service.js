const favoriteRepo = require("../repositories/favorite.repository")

exports.addFavorite = async (userId, movie) => {

  return await favoriteRepo.addFavorite({
    userId,
    movieId: movie.movieId,
    title: movie.title,
    poster: movie.poster
  })

}

exports.getFavorites = async (userId) => {

  return await favoriteRepo.getFavorites(userId)

}

exports.removeFavorite = async (userId, movieId) => {

  return await favoriteRepo.removeFavorite(userId, movieId)

}