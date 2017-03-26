const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public/dist');
const APP_DIR = path.resolve(__dirname, 'client/src');

const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
  	path: BUILD_DIR,
  	filename: 'bundle.js'
  }
};

module.exports = config;