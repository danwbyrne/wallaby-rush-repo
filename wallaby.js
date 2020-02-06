const path = require('path');

module.exports = function(wallaby) {
  process.env.NODE_PATH +=
    path.delimiter +
    path.join(wallaby.localProjectDir, 'common', 'temp', 'node_modules');

  return {
    autoDetect: true,
  }
};
