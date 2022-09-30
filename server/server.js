const express = require('express')
const cors = require('cors')
require('dotenv').config()

const { printTicket } = require('./modules/print')
const { emailDayReport } = require('./modules/mail')
const { loginWithPassword } = require('./modules/users')
const { loadPromos, storePromos } = require('./modules/promo')

const app = express()
const port = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  return res.send('connected to server...')
})

app.get('/promos', loadPromos)
app.post('/promos', storePromos)
app.post('/print', printTicket)
app.post('/email', emailDayReport)
app.post('/login', loginWithPassword)

app.listen(port, () => {
  console.log(`server running on port: ${port}`)
})
