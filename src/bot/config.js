require('dotenv/config');

module.exports = {
  token: process.env.BOT_TOKEN,
  webhook: {
    domain: process.env.WEBHOOK_DOMAIN,
    path: process.env.WEBHOOK_PATH || '/webhook/bot',
    secret: process.env.WEBHOOK_SECRET,
  },
};
