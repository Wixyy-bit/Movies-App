const express = require("express")
const authMiddleware = require('../middlewares/auth.middleware')

const router = express.Router()

const authController = require("../controllers/auth.controller")

router.post("/register", authController.register)
router.post("/login", authController.login)

router.get("/profile", authMiddleware, (req,res)=>{
  res.json(req.user)
})

module.exports = router