import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';
const NAMESPACE = 'health checkup controller';

const healthCheck = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'healthcheckup route called');

    return res.status(200).json({ message: 'OK' });
};

export default { healthCheck };
