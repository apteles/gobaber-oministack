import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const response = await User.create({
    name: 'dummy dummy',
    email: 'dummy@dummy.com',
    password_hash: '1213123123123',
  });
  return res.json(response);
});

export default routes;
