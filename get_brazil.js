const https = require('https');
https.get('https://raw.githubusercontent.com/d3/d3-geo/master/test/data/brazil.json', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(data.substring(0, 500)));
});
