const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Main endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'K8-Bit Test Node.js App',
    version: '1.0.0',
    description: 'This is a simple Node.js app for testing K8-Bit ScaleOps integration'
  });
});

// API endpoint
app.get('/api/info', (req, res) => {
  res.json({
    app: 'k8bit-test-nodejs-app',
    runtime: 'Node.js',
    version: process.version,
    platform: process.platform,
    uptime: process.uptime(),
    memory: process.memoryUsage()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});