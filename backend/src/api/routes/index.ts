import type express from 'express';
import { type Request, type Response } from 'express';
import { userRouter } from '../../app';

export const configureRoutes = (app: express.Application): void => {
  app.get('/', (req: Request, res: Response) => {
    res.send('Rinzler API is running!!!');
  });

  app.use('/users', userRouter);
};
