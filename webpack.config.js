const path = require('path');

module.exports = {
  resolve: {
    alias: {
      myApp: path.resolve(__dirname, 'src'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@apis': path.resolve(__dirname, 'src/apis/'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Ensure these extensions are included
  },
};
