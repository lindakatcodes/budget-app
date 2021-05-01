// const Airtable = require('airtable');
// Airtable.configure({
//     endpointUrl: 'https://api.airtable.com',
//     apiKey: process.env.AIRTABLE_API_KEY,
// });
// const base = Airtable.base('appF9AXkTCBJHOue6');

// IF(MONTH(Date) = 4, 'true', 'false')

function getTransactions() {
  const Airtable = require('airtable');
  const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base('appF9AXkTCBJHOue6');
  base('Transactions').select({
    // filterByFormula: 'MONTH(Date) = 4'
  }).eachPage(function page(records, fetchNextPage) {
    console.log(records);
    return records.forEach(record => record.fields);
  })
}

exports.handler = async function() {
  const recordList = await getTransactions();
  console.log(recordList);
  return {
    statusCode: 200,
    body: JSON.stringify(recordList),
  }
}


