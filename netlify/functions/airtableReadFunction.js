// const Airtable = require('airtable');
// Airtable.configure({
//     endpointUrl: 'https://api.airtable.com',
//     apiKey: process.env.AIRTABLE_API_KEY,
// });
// const base = Airtable.base('appF9AXkTCBJHOue6');

// IF(MONTH(Date) = 4, 'true', 'false')

exports.handler = async function() {
  const Airtable = require('airtable');
  const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base('appF9AXkTCBJHOue6');

  const results = [];

  try {
    return await base('Transactions')
      .select()
      .firstPage()
      .then((records) => {
        console.log('step 1');
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


