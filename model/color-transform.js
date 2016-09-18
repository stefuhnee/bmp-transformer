'use strict';

const fileHelper = require('../lib/file-helper');

module.exports = exports = {};

// Runs a transform on the palette
module.exports = function(filePath, transform, bitmap) {
  // var palette = bitmap.palette;
  // bitmap.palette = new ColorPalette;
  // console.log('bitmap palette', bitmap.palette);
  exports[transform](bitmap, fileHelper.writeBitmap);
};

// Transform Constructor
const ColorPalette = function() { };

exports.invert = function(bitmap, callback) {
  console.log('inverting');
  console.log('palette', bitmap.palette);
  for (var i = 0; i < bitmap.palette.length; i++) {
    let currentHex = bitmap.palette[i];
    currentHex = 255 - currentHex;
  }
  console.log('bitmap palette', bitmap.palette);
  callback('new', bitmap.wholeBuffer);
  // do inversion
};

exports.grayscale = function(callback) {
  // do grayscale
};

exports.randomize = function(callback) {
  // do randomize
};
