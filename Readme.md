# Dynamic Load Balancer with Queue Management in Node.js

## Setup and Running

### Requirements
- Node.js
- npm

### Install Dependencies
```bash
npm install express axios

# Run fast api 
node mock_apis/fast_api.js

# Run Slow API:
node mock_apis/slow_api.js

# Running the Load Balancer
node load_balancer/index.js

