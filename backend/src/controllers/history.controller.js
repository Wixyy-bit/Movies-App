const historyService = require("../services/history.service")

exports.addHistory = async (req, res) => {

  try {

    const userId = req.user.id

    const history = await historyService.addHistory(userId, req.body)

    res.status(201).json(history)

  } catch (err) {

    console.error(err)

    res.status(500).json({ message: "Server error" })

  }

}

exports.getHistory = async (req, res) => {

  const history = await historyService.getHistory(req.user.id)

  res.json(history)

}