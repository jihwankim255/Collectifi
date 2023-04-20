import express from 'express';

const router = express.Router();

import main from './main.route';
import user from './user.route';
import market from './market.route';
import community from './community.route';
import drawing from './drawing.routes';
import upgrade from './upgrade.route';
import game from './game.route';
import exchange from './exchange.route';

router.use('/', main);
router.use('/user', user);
router.use('/market', market);
router.use('/drawing', drawing);
router.use('/community', community);
router.use('/upgrade', upgrade);
router.use('/game', game);
router.use('/exchange', exchange);

export default router;
