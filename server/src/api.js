const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const logger = require('morgan');
const routes = require('./routes');

const api = express();

api.use(cors());
api.use(logger('dev'));
api.use(express.json());
api.use(routes);
api.use(errors());

module.exports = api;
