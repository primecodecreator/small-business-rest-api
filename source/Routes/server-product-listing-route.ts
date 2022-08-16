import express, { Router } from 'express';
import orderManagementController from '../controllers/order-management-controller';
import productListingController from '../controllers/product-listing-controller';

const router = express.Router();

router.get('/getallproduct', productListingController.getProductListing);
router.post('/saveorder', orderManagementController.saveOrder);
export = router;
