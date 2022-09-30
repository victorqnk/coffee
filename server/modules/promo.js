const fs = require('fs/promises')

const loadPromos = async (req, res) => {
  const file = './promos.txt'
  try {
    const content = await fs.readFile(file, 'utf-8')
    const promos = content.split('\n')
    const data = promos.map(promo => {
      const array = promo.split(',')
      return { title: array[0], price: parseFloat(array[1])}
    })
    return res.status(200).json(data)
  } catch (error) {
    console.error(error)
    return res.status(200).json({ success: false })
  }
}

const storePromos = async (req, res) => {
  const file = './promos.txt'
  try {
    await fs.writeFile(file, req.body.content)
    return res.status(200).json({ success: true })
  } catch (error) {
    console.error(error)
    return res.status(400).json({ success: false })
  }
}

module.exports = { loadPromos, storePromos }
