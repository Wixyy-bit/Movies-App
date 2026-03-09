import { createSlice } from "@reduxjs/toolkit"

const movieSlice = createSlice({
  name: "movies",

  initialState: {
    trending: [],
    loading: false
  },

  reducers: {

    setTrendingMovies: (state, action) => {
      state.trending = action.payload
    },

    setLoading: (state, action) => {
      state.loading = action.payload
    }

  }
})

export const { setTrendingMovies, setLoading } = movieSlice.actions

export default movieSlice.reducer