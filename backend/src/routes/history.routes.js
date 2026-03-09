const express = require("express")
const router = express.Router()

const historyController = require("../controllers/history.controller")
const authMiddleware = require("../middlewares/auth.middleware")

router.post("/", authMiddleware, historyController.addHistory)

router.get("/", authMiddleware, historyController.getHistory)

module.exports = router