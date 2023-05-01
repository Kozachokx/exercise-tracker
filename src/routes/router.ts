import { Router } from 'express';
import { CONFIG } from '../config';

const router = Router();

router.get('/', (req, res) => {
  return res.send({
    status: 'Server is live',
    date: new Date(),
    environment: CONFIG.NODE_ENV,
  });
});

export { router };
