const movieService = require("../services/movie.service")

exports.createMovie = async(req,res)=>{

  const movie = await movieService.createMovie(req.body)

  res.status(201).json(movie)

}

exports.getMovies = async(req,res)=>{

  const movies = await movieService.getMovies()

  res.json(movies)

}

exports.updateMovie = async(req,res)=>{

  const movie = await movieService.updateMovie(
    req.params.id,
    req.body
  )

  res.json(movie)

}

exports.deleteMovie = async(req,res)=>{

  await movieService.deleteMovie(req.params.id)

  res.json({message:"Movie deleted"})

}