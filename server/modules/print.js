const shell = require('shelljs')

const printTicket = (req, res) => {
  const {order,created,total,card} = req.body
  const time = `${created.toLocaleDateString()} ${created.toLocaleTimeString()}`
  const items = order.map(item => `${item.amount} ${item.title} $${item.price}\n`)
  shell.exec(`echo "Yacucu Cafe\n${time}\n\n${items}\n\nTOTAL: $${total}\nPago ${card ? 'con tarjeta' : 'en efectivo'}\n\nVuelve pronto\nyacucucafe@gmail.com / 7229376966" > receipt.txt`)
  shell.exec('lp receipt.txt')
  res.status(200).json(req.body)
}

const printShift = (req, res) => {}

module.exports = { printTicket }
