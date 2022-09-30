
const users = require('../users.json')

const loginWithPassword = (req, res) => {
  const { password } = req.body
  try {
    const found = users.find(user => user.password === password)
    return res.status(201).json({ username: found.username })
  } catch (error) {
    return res.status(401).json({ error: 'unauthorized' })
  }
}

module.exports = {
  loginWithPassword
}