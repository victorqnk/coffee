const nodemailer = require('nodemailer')

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

const emailDayReport = (req, res) => {
  const {
    user,
    cash,
    shift,
    sales,
    card,
    orders,
    takeouts,
    expenses,
    withdraw
  } = req.body

  mailOptions.text = `
    Reporte de ${user}, su turno fue de ${shift[0]} a ${shift[1]} 
    con ${orders} ventas por $${sales}, gastos de $${expenses} 
    dejando en caja $${cash}. 
    ${takeouts} ventas fueron para llevar, 
    $${card} se pagó con tarjeta y se retiró ${withdraw}.
  `

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) return res.status(400).json({ error: err })
    return res.status(200).json(info.response)
  })
}

module.exports = {emailDayReport}
