'use strict';

const fileHelper = require('../lib/file-helper');

module.exports = exports = {};

// Runs a transform on the palette
module.exports = function(filePath, transform, bitmap) {
  exports[transform](bitmap, fileHelper.writeBitmap);
};

exports.invert = function(bitmap, callback) {
  for (var i = 0; i < bitmap.palette.length; i++) {
    let currentHex = bitmap.palette[i].toString(16);
    currentHex = (255 - currentHex);
    bitmap.palette.writeUIntLE(currentHex, i, 1);
  }
  callback('new', bitmap.wholeBuffer);
};

exports.grayscale = function(bitmap, callback) {
  for (var i = 0; i < bitmap.palette.length; i+=4) {
    let grayscale = bitmap.palette[i].toString(16);
    console.log('grayscale', grayscale);
    bitmap.palette.writeUIntLE(grayscale, i, 1);
    bitmap.palette.writeUIntLE(grayscale, i+1, 1);        bitmap.palette.writeUIntLE(grayscale, i+2, 1);
  }
  callback('new', bitmap.wholeBuffer);
};

exports.randomize = function(bitmap, callback) {
  for (var i = 0; i < bitmap.palette.length; i++) {
    let currentHex = (Math.floor(Math.random() * 255) + 1).toString(16);
    bitmap.palette.writeUIntLE(currentHex, i, 1);
  }
  console.log('palette', bitmap.palette);
  callback('new', bitmap.wholeBuffer);
};
