const fs = require('fs');
const pug = require('pug');

const customersData = JSON.parse(fs.readFileSync('data/customersData.json', 'utf8'));

const html = pug.renderFile('views/layout.pug', { customers: customersData });

fs.writeFileSync('out/index.html', html); 