const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
dns.setDefaultResultOrder("ipv4first")

require("dotenv").config()

const express = require("express")
const cors = require("cors")

const connectDB = require("./src/config/db")
const authRoutes = require("./src/routes/auth.routes")
const favoriteRoutes = require("./src/routes/favorite.routes")
const historyRoutes = require("./src/routes/history.routes")
const movieRoutes = require("./src/routes/movie.routes")

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/favorites", favoriteRoutes)
app.use("/api/history", historyRoutes)
app.use("/api/movies", movieRoutes)

app.listen(3000, () => {
  console.log("Server running on port 3000")
})