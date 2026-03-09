const mongoose = require("mongoose")

const historySchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  movieId: {
    type: Number,
    required: true
  },

  title: String,

  poster: String

}, { timestamps: true })

historySchema.index({ userId: 1, movieId: 1 }, { unique: true })

module.exports = mongoose.model("History", historySchema)