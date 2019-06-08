// validate if proper json (internal JSON.parse will throw)
const quotes = require('../data/quotes.json')

// validate that each dialogue has voice types for all characters
const quotesNotMatchingSchema = quotes
  .map((quote, idx) => {
    const missingExpectedProps = quote.filter(q => !q.voice || !q.character || !q.line)

    if (missingExpectedProps.length) {
      return {
        index: idx,
        quote
      }
    }
  })
  .filter(v => !!v)

if (quotesNotMatchingSchema.length) {
  console.error('Some quotes are missing "voice" type for the characters')
  console.error(JSON.stringify(quotesNotMatchingSchema, null, 2))
  process.exit(1)
}
