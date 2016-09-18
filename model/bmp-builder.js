'use strict';

const transformBitmap = require('./color-transform');

module.exports = exports = {};

// build the bitmap
module.exports = function(buffer, filePath, transform) {
  var bitmap = new Bitmap(buffer);
  transformBitmap(filePath, transform, bitmap);
};
// Bitmap constructor -- from buffer, break into properties, find palette.
const Bitmap = function(buffer) {
  console.log(buffer);
  this.size = buffer.readUInt32LE(2);
  this.start = buffer.readUInt32LE(10);
  this.sizeOfHeader = buffer.readUInt32LE(14);
  this.colorPaletteNum = buffer.readUInt32LE(46);
  this.palette = buffer.slice(54, this.start);
  this.wholeBuffer = buffer;
};
