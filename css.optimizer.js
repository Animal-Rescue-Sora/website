'use strict';
const fs = require('fs');
const mqpacker = require('css-mqpacker');

const result = mqpacker.pack(fs.readFileSync('./dist/docs/common/css/style.min.css', 'utf8'), {
  from: "from.css",
  map: false,
  sort: true,
  to: './dist/docs/common/css/style.min.css'
});
fs.writeFileSync('./dist/docs/common/css/style.min.css', result.css);
