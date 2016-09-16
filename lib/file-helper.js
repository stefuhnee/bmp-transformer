'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.readBuffer = function(filePath, transform, callback) {
  fs.readFile(`${__dirname}/${filePath}`, function(err, data) {
    if (err) return callback(err);
    callback(data);
  });
};

exports.writeBuffer = function() {
  // write buffer;
}
