import express from 'express';

const router = express.Router();

router.get('/example', (req, res) => {
  res.send('Hello from the router!');
});

export default router;