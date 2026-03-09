const historyRepo = require("../repositories/history.repository")

exports.addHistory = async (userId, movie) => {

  return await historyRepo.addHistory(userId, movie)

}

exports.getHistory = async (userId) => {

  return await historyRepo.getHistory(userId)

}