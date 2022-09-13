import express, { Request, Response } from 'express';
import { currentUser } from '@sonlamtickets/common';
import { requireAuth } from '@sonlamtickets/common';

const router = express.Router();

router.get(
  '/api/users/currentUser',
  currentUser,
  requireAuth,
  (req: Request, res: Response) => {
    console.log('current user');
    return res.send({ currentUser: req.currentUser });
  }
);

export { router as currentUserRouter };
