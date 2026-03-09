import api from "../api/backendApi"

export const useHistory = () => {

  const addHistory = async (movie) => {

    await api.post("/api/history",{
      movieId: movie.id,
      title: movie.title,
      poster: movie.poster_path
    })

  }

  const getHistory = async () => {

    const res = await api.get("/api/history")

    return res.data

  }

  return {
    addHistory,
    getHistory
  }

}