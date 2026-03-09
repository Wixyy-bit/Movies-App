import { useState } from "react"
import api from "../api/backendApi"

export const useFavorites = () => {

  const [favorites,setFavorites] = useState([])

  const fetchFavorites = async () => {

    const res = await api.get("/api/favorites")

    setFavorites(res.data)

  }

  const addFavorite = async (movie) => {

    await api.post("/favorites",{
      movieId: movie.id,
      title: movie.title,
      poster: movie.poster_path
    })

    fetchFavorites()
  }

  const removeFavorite = async (movieId) => {

    await api.delete(`/api/favorites/${movieId}`)

    fetchFavorites()
  }

  const isFavorite = (movieId) => {

    return favorites.some(f => f.movieId === movieId)

  }

  return {
    favorites,
    fetchFavorites,
    addFavorite,
    removeFavorite,
    isFavorite
  }

}