exports.handler = async function(event) {
  const Airtable = require('airtable');
  const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base('appF9AXkTCBJHOue6');

  try {
    return await base('Transactions')
      .create({
        "Amount": event.queryStringParameters.amount,
        "Store": event.queryStringParameters.store
      }, function (err, res) {
        console.log('got inside callback')
        if (err) {
          return {
            statusCode: 501,
            body: `Got an error: ${err}`
          }
        } else {
          return {
            statusCode: 200,
            body: `Successfully added record ${res}`
          }
        }
      })
  } catch {
      return {
        statusCode: 500,
        body: `Something went wrong`
      }
  }
}


