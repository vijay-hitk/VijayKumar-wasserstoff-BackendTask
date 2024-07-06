const axios = require('axios');
const fs = require('fs');

function logRequest(endpoint, responseTime) {
  const logMessage = `Endpoint: ${endpoint}, Response Time: ${responseTime.toFixed(4)} seconds\n`;
  fs.appendFileSync('logs/logs.txt', logMessage);
}

async function handleRequest(endpoint) {
  const startTime = Date.now();
  const response = await axios.get(endpoint);
  const responseTime = (Date.now() - startTime) / 1000;

  logRequest(endpoint, responseTime);
  return response.data;
}

module.exports = { handleRequest };
