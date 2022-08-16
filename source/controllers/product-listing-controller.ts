import { Request, Response, NextFunction } from 'express';
import productListProviderService from '../services/product-listing-provider-service';
import logging from '../config/logging';
const NAMESPACE = 'Product Listing controller';

const getProductListing = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Product Listing controller route called');

    return res.status(200).json(productListProviderService.getProductListingData());
};

export default { getProductListing };
