import { addOns } from './product-addons';
import { productDetails } from './product-details';
import { productTaxDetail } from './product-tax-detail';

export interface orderItem {
    orderID: string;
    productId: string;
    product: productDetails;
    orderPrice: number;
    orderAddons: addOns[];
    orderprice: number;
    ordertax: productTaxDetail;
    orderTotalPrice: number;
    maxOrderSize: number;
    orderDate: string;
    orderExtraInfoObjec?: string; // stringify json
}
