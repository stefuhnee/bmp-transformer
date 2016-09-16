'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.readBuffer = function(filePath, transform, callback) {
  fs.readFile(`${__dirname}/${filePath}`, function(err, data) {
    if (err) return callback(err);
    callback(data, filePath, transform);
  });
};

exports.writeBuffer = function(fileName, buffer, callback) {
  fs.writeFile(`${__dirname}/data/${fileName}-new.bmp`, buffer, function(err, data) {
    if (err) return callback(err);
    callback(data);
  });
};
