import api from "../api/backendApi"

export const useHistory = () => {

  const addHistory = async (movie) => {

    await api.post("/history",{
      movieId: movie.id,
      title: movie.title,
      poster: movie.poster_path
    })

  }

  const getHistory = async () => {

    const res = await api.get("/history")

    return res.data

  }

  return {
    addHistory,
    getHistory
  }

}