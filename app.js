require('dotenv/config');
const express = require('express');
const logger = require('morgan');

const botConfig = require('./src/bot/config');
const { webhookHandler } = require('./src/bot');

const app = express();

app.use(logger('dev'));
app.use(express.json());

if (botConfig.token) {
  app.use(botConfig.webhook.path, webhookHandler);
}

module.exports = app;
