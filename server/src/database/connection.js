const knex = require('knex');
const dbConfig = require('../../knexfile');

const ENV =
  process.env.NODE_ENV === 'test' ? dbConfig.test : dbConfig.development;

const connection = knex(ENV);

module.exports = connection;
