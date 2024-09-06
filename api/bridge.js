const https = require('https');

module.exports = (req, res) => {
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const options = {
    hostname: 'your-vercel-app-name.vercel.app',
    port: 443,
    path: '/pollen',
    method: req.method,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const proxyReq = https.request(options, (proxyRes) => {
    let body = '';
    proxyRes.on('data', (chunk) => body += chunk);
    proxyRes.on('end', () => {
      res.status(proxyRes.statusCode).json(JSON.parse(body));
    });
  });

  proxyReq.on('error', (error) => {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  });

  if (req.body) proxyReq.write(JSON.stringify(req.body));
  proxyReq.end();
};