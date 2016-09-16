'use strict';

const fileHelper = require('./lib/file-helper');
const buildBitmap = require('./model/bmp-builder');

// pass in filepath, then transform type via command line

fileHelper(process.argv[2], process.argv[3], buildBitmap);
