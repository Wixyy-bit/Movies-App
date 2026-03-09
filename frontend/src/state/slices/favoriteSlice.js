import { createSlice } from "@reduxjs/toolkit"

const favoriteSlice = createSlice({
  name: "favorites",

  initialState: {
    list: [],
    loading: false
  },

  reducers: {

    setFavorites: (state, action) => {
      state.list = action.payload
    },

    addFavorite: (state, action) => {
      state.list.push(action.payload)
    },

    removeFavorite: (state, action) => {
      state.list = state.list.filter(
        fav => fav.movieId !== action.payload
      )
    },

    setLoading: (state, action) => {
      state.loading = action.payload
    }

  }

})

export const {
  setFavorites,
  addFavorite,
  removeFavorite,
  setLoading
} = favoriteSlice.actions

export default favoriteSlice.reducer