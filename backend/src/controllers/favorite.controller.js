const favoriteService = require("../services/favorite.service")

exports.addFavorite = async (req,res)=>{

  try{
    const userId = req.user.id
    const result = await favoriteService.addFavorite(userId, req.body)

    res.status(201).json(result)

  }catch(err){

    res.status(500).json({message:err.message})

  }

}

exports.getFavorites = async (req,res)=>{

  const favorites = await favoriteService.getFavorites(req.user.id)

  res.json(favorites)

}

exports.removeFavorite = async (req,res)=>{

  await favoriteService.removeFavorite(req.user.id, req.params.movieId)

  res.json({message:"Removed from favorites"})

}