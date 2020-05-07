import { Router } from 'express';
import auth from './routes/auth';
// import user from './routes/user';
import agendash from './routes/agendash';

export default () => {
  const app = Router();
  auth(app);
  // user(app);
  agendash(app);

  return app;
};
