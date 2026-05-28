const { Bot, webhookCallback } = require('grammy');
const config = require('./config');
const handleMessage = require('../handlers/message');

const bot = new Bot(config.token);

bot.on('message:text', handleMessage);

const webhookHandler = webhookCallback(bot, 'express');

async function setWebhook() {
  if (config.webhook.domain) {
    const url = `${config.webhook.domain}${config.webhook.path}`;
    await bot.api.setWebhook(url, {
      secret_token: config.webhook.secret,
    });
  }
}

async function startPolling() {
  console.log('Bot started in polling mode');
  bot.start();
}

module.exports = { bot, webhookHandler, setWebhook, startPolling };
