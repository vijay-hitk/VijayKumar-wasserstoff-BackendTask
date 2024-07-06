class Queue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(item) {
      this.queue.push(item);
    }
  
    dequeue() {
      return this.queue.shift();
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  
    size() {
      return this.queue.length;
    }
  }
  
  class PriorityQueue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(item, priority) {
      this.queue.push({ item, priority });
      this.queue.sort((a, b) => a.priority - b.priority);
    }
  
    dequeue() {
      return this.queue.shift().item;
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  
    size() {
      return this.queue.length;
    }
  }
  
  class RoundRobinQueue {
    constructor(endpoints) {
      this.endpoints = endpoints;
      this.currentIndex = 0;
    }
  
    next() {
      const endpoint = this.endpoints[this.currentIndex];
      this.currentIndex = (this.currentIndex + 1) % this.endpoints.length;
      return endpoint;
    }
  }
  
  module.exports = { Queue, PriorityQueue, RoundRobinQueue };
  