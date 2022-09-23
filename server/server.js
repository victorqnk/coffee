const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')

const app = express()
const port = process.env.PORT || 8000

require('dotenv').config()
const users = require('./users.json')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).json({msg:'connected...'})
})

// send email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.KEY
  }
})

let mailOptions = {
  from: process.env.EMAIL,
  to: 'vik5@outlook.com',
  subject: 'Reporte del día',
}

app.post('/email', (req, res) => {
  const {} = req.body
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) return res.status(400).json({ error: err })
    return res.status(200).json(info.response)
  })
})
// print ticket
app.post('/print', (req, res) => {
  const {} = req.body
  // shell.exec(`echo "test" > receipt.txt`)
  // shell.exec('lp receipt.txt')
})
// start server
// quit server

app.post('/login', (req, res) => {
  const {password} = req.body
  try {
    const found = users.find(user => user.password === password)
    return res.status(201).json({username: found.username})
  } catch (error) {
    return res.status(401).json({error: 'unauthorized'})
  }
})

app.listen(port, () => {
  console.log(`server running on port: ${port}`)
})
