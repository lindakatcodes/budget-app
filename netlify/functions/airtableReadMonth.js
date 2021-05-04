exports.handler = async function() {
  const Airtable = require('airtable');
  const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base('appF9AXkTCBJHOue6');

  const results = [];
  // +1 because getMonth is 0 indexed
  const currentMonth = new Date().getMonth() + 1;

  try {
    return await base('Transactions')
      .select({filterByFormula: `MONTH(Date) = ${currentMonth}`})
      .firstPage()
      .then((records) => {
        records.forEach(record => results.push(record.fields))
        return {
          statusCode: 200,
          body: JSON.stringify(results)
        }
      })
  } catch {
      return {
        statusCode: 500,
        body: `Something went wrong`
      }
  }
}


