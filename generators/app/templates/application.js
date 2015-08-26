var packageJson = require('../package.json');

exports.app = {
  name: packageJson.name,
  port: 8000,
  version: packageJson.version,
};

exports.environment = {
  development: {
    secretKey: 'secretKey'
  }
};
