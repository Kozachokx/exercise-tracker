import express, { Application } from 'express';
import cors from 'cors';

import { CONFIG } from './config';
import { createRouter } from './routes';
import { router as healthCheck } from './routes/router';

const app: Application = express();

export async function createServer() {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(healthCheck);

  app.use(express.urlencoded({ extended: true }));

  createRouter(app);

  app.listen(CONFIG.SERVER_PORT, () => {
    console.log(`Server started on port '${CONFIG.SERVER_PORT}'...`)
  });

  return app;
}
