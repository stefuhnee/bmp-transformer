'use strict';

module.exports = exports = {};

// Transform Constructor
const Transformer = module.exports = function() { };

Transformer.prototype.invert = function(callback) {
  for (var i = 0; i < this.palette.length; i++) {
    let currentHex = this.palette.readUInt8(i);
    currentHex = (255 - currentHex).toString(16);
    this.palette.writeUInt(currentHex, i);
  }
  callback(this);
  // do inversion
};

Transformer.prototype.grayscale = function(callback) {
  // do grayscale
};

Transformer.prototype.randomize = function(callback) {
  // do randomize
};
