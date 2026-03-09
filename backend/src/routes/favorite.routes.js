const express = require("express")
const router = express.Router()

const favoriteController = require("../controllers/favorite.controller")
const authMiddleware = require("../middlewares/auth.middleware")

router.post("/", authMiddleware, favoriteController.addFavorite)

router.get("/", authMiddleware, favoriteController.getFavorites)

router.delete("/:movieId", authMiddleware, favoriteController.removeFavorite)

module.exports = router