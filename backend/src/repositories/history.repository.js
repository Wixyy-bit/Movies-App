const History = require("../models/History")

exports.addHistory = async (userId, movie) => {

  const existing = await History.findOne({
    userId,
    movieId: movie.movieId
  })

  if (existing) {

    existing.updatedAt = Date.now()

    return await existing.save()

  }

  return await History.create({
    userId,
    movieId: movie.movieId,
    title: movie.title,
    poster: movie.poster
  })

}

exports.getHistory = async (userId) => {

  return await History
    .find({ userId })
    .sort({ updatedAt: -1 })
    .limit(20)

}