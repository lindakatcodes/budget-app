exports.handler = async function(event) {
  const Airtable = require('airtable');
  const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base('appF9AXkTCBJHOue6');

  const amt = parseFloat(event.queryStringParameters.amount);
  const place = event.queryStringParameters.store;
  // console.log(typeof(amt), typeof(place));

  try {
    return await base('Transactions')
      .create({
        "Amount": amt,
        "Store": place
      })
      .then(record => {
        return {
          statusCode: 200,
          body: JSON.stringify(record)
        }
      })
  } catch {
      return {
        statusCode: 418,
        body: `Something went wrong with creating this record.`
      }
  }
}


