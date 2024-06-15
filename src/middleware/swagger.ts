// middleware/swagger.ts
import { swaggerSpec } from '@/lib/swagger';
import { createServer } from 'http';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextServer } from 'next/dist/server/next';
import swaggerUi from 'swagger-ui-express';
import { parse } from 'url';

const dev = process.env.NODE_ENV !== 'production';
const app = new NextServer({ dev, conf: {} });

export default async function swaggerMiddleware(req: NextApiRequest, res: NextApiResponse) {
  await app.prepare();

  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url!, true);
    app.getRequestHandler()(req, res, parsedUrl);
  });

  // Mount the Swagger UI express middleware
  server.on('request', swaggerUi.setup(swaggerSpec));

  // Use server to handle requests
  server.emit('request', req, res);
}