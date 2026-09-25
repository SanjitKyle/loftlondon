const fs = require('fs');
const https = require('https');

function download(url, dest, cb) {
  const file = fs.createWriteStream(dest);
  https.get(url, { rejectUnauthorized: false }, response => {
    if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
      return download(response.headers.location, dest, cb);
    }
    response.pipe(file);
    file.on('finish', () => {
      file.close(() => {
        console.log('Downloaded: ' + dest + ' (' + fs.statSync(dest).size + ' bytes)');
        if (cb) cb();
      });
    });
  }).on('error', err => {
    fs.unlink(dest, () => {});
    console.error('Error downloading ' + dest + ':', err.message);
  });
}

download(
  'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&w=800&q=80',
  'slate-roofing.jpg',
  () => {
    download(
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80',
      'hip-gable-loft.jpg',
      () => {
        console.log('All downloads finished successfully.');
      }
    );
  }
);
