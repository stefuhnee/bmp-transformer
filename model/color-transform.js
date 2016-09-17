'use strict';

module.exports = exports = {};

// Transform Constructor
const Transformer = module.exports = function() { };

Transformer.prototype.invert = function(callback) {
  for (var i = 0; i < this.palette.length; i+=4) {
    let currentHex = this.palette.readUInt32(i);
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
