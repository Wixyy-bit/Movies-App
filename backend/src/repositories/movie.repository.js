const Movie = require("../models/Movie")

exports.createMovie = async(data)=>{
  return await Movie.create(data)
}

exports.getMovies = async()=>{
  return await Movie.find()
}

exports.updateMovie = async(id,data)=>{
  return await Movie.findByIdAndUpdate(id,data,{new:true})
}

exports.deleteMovie = async(id)=>{
  return await Movie.findByIdAndDelete(id)
}