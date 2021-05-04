exports.handler = async function() {
  const Airtable = require('airtable');
  const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base('appF9AXkTCBJHOue6');

  const results = [];

  try {
    return await base('Transactions')
      .select({sort: [{field: 'Date', direction: 'desc'}]})
      .firstPage()
      .then((records) => {
        // console.log('step 1');
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


