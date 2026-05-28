const ai = require('./ai');

async function processMessage(userMessage) {
  const aiResponse = await ai.generateResponse(userMessage);

  if (aiResponse) {
    return aiResponse;
  }

  // Fallback while AI is not integrated
  return `You said: "${userMessage}"\n\nAI response: [Skipped for testing]`;
}

module.exports = { processMessage };
