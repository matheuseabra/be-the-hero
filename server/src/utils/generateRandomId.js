const crypto = require('crypto');

module.exports = function generateRandomID() {
  return crypto.randomBytes(4).toString('HEX');
};
