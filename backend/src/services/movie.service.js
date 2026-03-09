const movieRepo = require("../repositories/movie.repository")

exports.createMovie = async(data)=>{
  return await movieRepo.createMovie(data)
}

exports.getMovies = async()=>{
  return await movieRepo.getMovies()
}

exports.updateMovie = async(id,data)=>{
  return await movieRepo.updateMovie(id,data)
}

exports.deleteMovie = async(id)=>{
  return await movieRepo.deleteMovie(id)
}