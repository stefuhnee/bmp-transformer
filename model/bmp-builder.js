'use strict';

module.exports = exports = {};

// Bitmap constructor -- from buffer, break into properties, find palette.
const Bitmap = module.exports = function(buffer) {
  // this.size = buffer.readUInt32LE(2);
  this.start = buffer.readUInt32LE(10);
  // this.sizeOfHeader = buffer.readUInt32LE(14);
  this.colorPaletteNum = buffer.readUInt32LE(46);
  this.palette = buffer.slice(54, this.start);
};
