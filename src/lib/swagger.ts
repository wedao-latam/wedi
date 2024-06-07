// utils/swagger.ts
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Next.js API Documentation',
      version: '1.0.0',
    },
  },
  apis: ['./src/app/api/**/*.ts'], // Path to the API docs
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerSpec, swaggerUi };
