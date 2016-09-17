'use strict';

const fileHelper = require('../lib/file-helper');

module.exports = exports = {};

// Runs a transform on the palette
module.exports = function(filePath, transform, bitmap) {
  bitmap.palette = new ColorPalette();
  bitmap.palette['transform'](fileHelper.writeBitmap);
};

// Transform Constructor
const ColorPalette = function() { };

ColorPalette.prototype.invert = function(callback) {
  for (var i = 0; i < this.length; i+=4) {
    let currentHex = this.readUInt32(i);
    console.log(currentHex);
  }
  callback(this);
  // do inversion
};

ColorPalette.prototype.grayscale = function(callback) {
  // do grayscale
};

ColorPalette.prototype.randomize = function(callback) {
  // do randomize
};
