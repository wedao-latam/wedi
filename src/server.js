// server.js
const express = require('express');
const next = require('next');
const swaggerUi = require('swagger-ui-express');
const { swaggerSpec } = require('./utils/swagger');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Serve Swagger UI
  server.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Handle other routes
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
