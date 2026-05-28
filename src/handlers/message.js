const { processMessage } = require('../services/processor');

async function handleMessage(ctx) {
  const userMessage = ctx.message.text;
  const response = await processMessage(userMessage);
  await ctx.reply(response);
}

module.exports = handleMessage;
