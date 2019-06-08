const quotes = require('../data/quotes.json')
const { STATUS_CODES } = require('http')

module.exports = function(_, res) {
  try {
    const noOfQuotes = quotes.length
    const idx = ~~(Math.random() * 1000) % noOfQuotes
    const quote = quotes[idx]
    const response = JSON.stringify(quotes[idx], null, 2) + '\n'

    console.log('Chosen index ->', idx)
    console.log('Responding with quote ->', quote)

    res.writeHead(200, STATUS_CODES[200], {
      'content-length': Buffer.byteLength(response, 'utf8')
    })
    res.end(response)
  } catch (err) {
    console.log('Something went wrong :(')
    console.log(err)

    res.writeHead(500, STATUS_CODES[500])
    res.end()
  }
}
