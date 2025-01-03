import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import { showTicketRouer } from './routes/show';
import { indexTicketRouter } from './routes';

import cookieSession from 'cookie-session';

import {
  NotFoundError,
  currentUser,
  errorHandler,
} from '@joshuacauseytickets/common';
import { createTicketRouter } from './routes/new';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);

app.use(currentUser);

app.use(createTicketRouter, showTicketRouer, indexTicketRouter);

app.all('*', async (req, res, next) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
