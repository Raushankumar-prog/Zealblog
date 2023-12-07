import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { protect } from './modules/auth';
import { createNewUser, signin } from './handlers/user';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', protect);

app.post('/user', createNewUser);
app.post('/signin', signin);

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.log(err);
  res.json({ message: `had an error: ${err.message}` });
});

export default app;
