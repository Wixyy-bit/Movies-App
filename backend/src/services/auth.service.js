const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userRepository = require("../repositories/user.repository")

exports.registerUser = async (data) => {

  const existingUser = await userRepository.findUserByEmail(data.email)

  if (existingUser) {
    throw new Error("User already exists")
  }

  const hashedPassword = await bcrypt.hash(data.password, 10)

  const user = await userRepository.createUser({
    ...data,
    password: hashedPassword
  })

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  )

  return { user, token }

}

exports.loginUser = async (data) => {

  const user = await userRepository.findUserByEmail(data.email)

  if(!user){
    throw new Error("Invalid credentials")
  }

  const isMatch = await bcrypt.compare(data.password, user.password)

  if(!isMatch){
    throw new Error("Invalid credentials")
  }

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  )

  return { user, token }

}