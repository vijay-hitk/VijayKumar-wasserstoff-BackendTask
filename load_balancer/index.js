const express = require('express');
const { Queue, PriorityQueue, RoundRobinQueue } = require('./queue_manager');
const { handleRequest } = require('./request_handler');
const endpoints = require('../load-balancer/config/endpoints.json');

const app = express();
app.use(express.json());

const fifoQueue = new Queue();
const priorityQueue = new PriorityQueue();
const roundRobinQueue = new RoundRobinQueue(endpoints.rest);

app.post('/enqueue', (req, res) => {
  const { apiType, priority } = req.body;

  if (apiType === 'rest') {
    const endpoint = endpoints.rest[Math.floor(Math.random() * endpoints.rest.length)];
    fifoQueue.enqueue(endpoint);
    priorityQueue.enqueue(endpoint, priority);
  }

  res.json({ message: 'Request enqueued' });
});

app.post('/process', async (req, res) => {
  const { strategy } = req.body;
  let endpoint;

  if (strategy === 'fifo' && !fifoQueue.isEmpty()) {
    endpoint = fifoQueue.dequeue();
  } else if (strategy === 'priority' && !priorityQueue.isEmpty()) {
    endpoint = priorityQueue.dequeue();
  } else if (strategy === 'round-robin') {
    endpoint = roundRobinQueue.next();
  } else {
    return res.status(400).json({ message: 'Invalid strategy or empty queue' });
  }

  const response = await handleRequest(endpoint);
  res.json(response);
});

app.listen(3000, () => {
  console.log('Load Balancer listening on port 3000');
});
