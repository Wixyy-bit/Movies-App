import axios from "axios"

const API_KEY = "c58f21dbd250fe5ca73f83736cfb274d"

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3"
})

export const getTrendingMovies = () => {
  return api.get(`/trending/movie/week?api_key=${API_KEY}`)
}