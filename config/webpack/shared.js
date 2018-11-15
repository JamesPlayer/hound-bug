const path = require('path');

module.exports = {
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
    alias: {
      Root: path.resolve(__dirname, '../../app/javascript'),
      HoundBug: path.resolve(__dirname, '../../app/javascript/hound_bug'),
      Shared: path.resolve(__dirname, '../../app/javascript/shared'),
    },
  },
};
