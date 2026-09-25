const fs = require('fs');
const https = require('https');

const content = fs.readFileSync('index.html', 'utf8') + '\n' + fs.readFileSync('script.js', 'utf8');
const urls = Array.from(new Set(content.match(/https:\/\/images\.unsplash\.com\/[^\s"'<>)]+/g) || []));

console.log('Total URLs found: ' + urls.length);

let checked = 0;
urls.forEach(url => {
  const req = https.request(url, { method: 'HEAD', rejectUnauthorized: false }, res => {
    console.log(res.statusCode + ' : ' + url);
    checked++;
    if (checked === urls.length) process.exit(0);
  });
  req.on('error', err => {
    console.log('ERR : ' + url + ' - ' + err.message);
    checked++;
    if (checked === urls.length) process.exit(0);
  });
  req.end();
});
