import express from 'express';
import * as pollingController from '../controllers/pollingController.mjs';

const router = express.Router();

router.route('/create')
    .put(pollingController.createPolls);

router.route('/fetch')
    .get(pollingController.fetchPoll);

router.route('/updateVote')
    .patch(pollingController.updateVote);

export { router };