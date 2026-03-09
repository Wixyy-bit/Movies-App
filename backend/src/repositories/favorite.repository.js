const Favorite = require("../models/Favorite")

exports.addFavorite = async (data) => {
  return await Favorite.create(data)
}

exports.getFavorites = async (userId) => {
  return await Favorite.find({ userId })
}

exports.removeFavorite = async (userId, movieId) => {
  return await Favorite.findOneAndDelete({ userId, movieId })
}