const fs = require('fs');

const data = fs.readFileSync(`${__dirname}/data/countries.json`, 'utf8');
const parsed = JSON.parse(data);
const newData = parsed.map((i) => ({
  name: i?.name ?? '',
  countryCode: i?.countryCode ?? '',
  iso2: i?.iso2 ?? '',
  iso3: i?.iso3 ?? '',
  region: i?.region ? i.region.toUpperCase() : 'NO_REGION',
  subRegion: i?.subRegion ? i.subRegion.toUpperCase().split(' ').join('_').replace(/-/gi, '_') : 'NO_SUB_REGION',
}));

fs.writeFileSync(`${__dirname}/data/countries.json`, JSON.stringify(newData), 'utf-8');