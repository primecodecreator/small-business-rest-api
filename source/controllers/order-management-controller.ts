import { Request, Response, NextFunction, response } from 'express';
import productListProviderService from '../services/product-listing-provider-service';
import logging from '../config/logging';
import { orderItem } from '../models/data-models/Order-detail';
import { orderSaveStatus } from '../models/request-response-models/order-save-result';
const NAMESPACE = 'Product Listing controller';

const saveOrder = (req: Request, res: Response, next: NextFunction) => {
    try {
        logging.info(NAMESPACE, 'ordermanagemant save order called', req.body);

        let orderItem: orderItem[] = req.body;
        if (validateOrder(orderItem)) {
            return res.json(<orderSaveStatus>{ message: 'order save' });
        }
        return res.json(<orderSaveStatus>{ message: 'Error !order save, business rule fail' });

        /***
         * HEAR ORDER DETAIL COUNLD BE MANAGE IN DB
         */
    } catch (exception) {
        logging.info(NAMESPACE, 'Error', exception);
    }
};

function validateOrder(_orderItem: orderItem[]): boolean {
    let isvalid = true;
    _orderItem.forEach((i) => {
        if (productListProviderService.getProductListingData().find((j) => (i.productId === j.productId && j.maxOrderSize < i.maxOrderSize) === null)) {
            isvalid = false;
        }
    });
    return isvalid;
}
export default { saveOrder };
