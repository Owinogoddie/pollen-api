const https = require('https');

module.exports = (req, res) => {
  console.log('Received request:', req.method, req.url);

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const options = {
    hostname: 'pollen-api-15xq.vercel.app',
    port: 443,
    path: '/pollen',
    method: req.method,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  console.log('Forwarding request to:', options.hostname + options.path);

  const proxyReq = https.request(options, (proxyRes) => {
    console.log('Received response from main app:', proxyRes.statusCode);
    let body = '';
    proxyRes.on('data', (chunk) => body += chunk);
    proxyRes.on('end', () => {
      console.log('Response body:', body);
      res.status(proxyRes.statusCode).send(body);
    });
  });

  proxyReq.on('error', (error) => {
    console.error('Error in proxy request:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  });

  if (req.body) {
    const bodyData = JSON.stringify(req.body);
    console.log('Request body:', bodyData);
    proxyReq.write(bodyData);
  }
  proxyReq.end();
};