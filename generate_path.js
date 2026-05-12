const fs = require('fs');
const d3 = require('d3-geo');
const geojson = JSON.parse(fs.readFileSync('brazil.json', 'utf8'));
const projection = d3.geoMercator().fitSize([500, 500], geojson);
const pathGenerator = d3.geoPath().projection(projection);
console.log(pathGenerator(geojson));
