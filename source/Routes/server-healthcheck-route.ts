import express, { Router } from 'express';
import healthcheckController from '../controllers/healthcheck-controller';

const router = express.Router();

router.get('/ping', healthcheckController.healthCheck);

export = router;
