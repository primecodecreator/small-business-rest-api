import { productDiscountType } from '../../enum/product-discount-type';
export interface productDiscountDetail {
    discountType: productDiscountType;
    discountRatePercentage?: number;
    discountFlatePrice?: number;
}
