import { ProductType } from '../enum/product-type';
import { productDetails } from '../models/data-models/product-details';
import { promoCode } from '../models/data-models/product-promo-code';
import { productDiscountDetail } from '../models/data-models/product-discount';
import { productDiscountType } from '../enum/product-discount-type';
import { addOns } from '../models/data-models/product-addons';
import { imageDetail } from '../models/data-models/image-detail';
import { productTaxDetail } from '../models/data-models/product-tax-detail';
import { taxType } from '../enum/tax-type';

const productList: productDetails[] = new Array<productDetails>(
    <productDetails>{
        productId: '1',
        prodctType: ProductType.Physical,
        productDescription: '',
        price: 100,
        productName: 'Classic Abacus',
        promoCode: <promoCode>{ isPromoCodeAvailable: true, promoCode: 'WELCOME10', validTill: new Date(new Date().getTime() + 24 * 60 * 60 * 1000) },
        discount: <productDiscountDetail>{ discountType: productDiscountType.FlatPrice, discountFlatePrice: 10 },
        maxDiscount: 20,
        addOns: new Array<addOns>(
            <addOns>{ addOnId: 'ad123', addOnName: 'Gift Wrap Standard', addOnServiceGroupId: 'wrap', isApplicable: true, isMultiSelect: false, addOnPrice: 5 },
            <addOns>{ addOnId: 'ad123', addOnName: 'Gift Wrap Premium', addOnServiceGroupId: 'wrap', isApplicable: true, isMultiSelect: false, addOnPrice: 20 }
        ),
        imageDetail: <imageDetail>{ alternateText: 'image not available', largeImg: '', thumbNailImg: '' },
        minOrderSize: 1,
        maxOrderSize: 10,
        productTaxDetail: <productTaxDetail>{ taxType: taxType.Custom, taxPercentage: 0.05 }
    },
    <productDetails>{
        productId: '2',
        prodctType: ProductType.Virtual,
        productDescription: '',
        price: 100,
        productName: 'Baby Sitting Service',
        promoCode: <promoCode>{ isPromoCodeAvailable: true, promoCode: 'WELCOME10', validTill: new Date(new Date().getTime() + 24 * 60 * 60 * 1000) },
        discount: <productDiscountDetail>{ discountType: productDiscountType.FlatPrice, discountFlatePrice: 10 },
        maxDiscount: 20,
        addOns: undefined,
        imageDetail: <imageDetail>{ alternateText: 'image not available', largeImg: '', thumbNailImg: '' },
        minOrderSize: 1,
        maxOrderSize: 1,
        productTaxDetail: <productTaxDetail>{ taxType: taxType.Standard, taxPercentage: 0.05 }
    },
    <productDetails>{
        productId: '4',
        prodctType: ProductType.Physical,
        productDescription: '',
        price: 100,
        productName: 'Wooden Car',
        promoCode: <promoCode>{ isPromoCodeAvailable: true, promoCode: 'WELCOME10', validTill: new Date(new Date().getTime() + 24 * 60 * 60 * 1000) },
        discount: <productDiscountDetail>{ discountType: productDiscountType.FlatPrice, discountFlatePrice: 10 },
        maxDiscount: 20,
        addOns: new Array<addOns>(
            <addOns>{ addOnId: 'ad123', addOnName: 'Gift Wrap Standard', addOnServiceGroupId: 'wrap', isApplicable: true, isMultiSelect: false, addOnPrice: 5 },
            <addOns>{ addOnId: 'ad123', addOnName: 'Gift Wrap Premium', addOnServiceGroupId: 'wrap', isApplicable: true, isMultiSelect: false, addOnPrice: 20 }
        ),
        imageDetail: <imageDetail>{ alternateText: 'image not available', largeImg: '', thumbNailImg: '' },
        minOrderSize: 1,
        maxOrderSize: 10,
        productTaxDetail: <productTaxDetail>{ taxType: taxType.Standard, taxPercentage: 0.05 }
    },
    <productDetails>{
        productId: '5',
        prodctType: ProductType.Physical,
        productDescription: '',
        price: 100,
        productName: 'Stacking Rings',
        promoCode: <promoCode>{ isPromoCodeAvailable: true, promoCode: 'WELCOME10', validTill: new Date(new Date().getTime() + 24 * 60 * 60 * 1000) },
        discount: <productDiscountDetail>{ discountType: productDiscountType.FlatPrice, discountFlatePrice: 10 },
        maxDiscount: 20,
        addOns: new Array<addOns>(<addOns>{ addOnId: 'ad123', addOnName: 'Gift Wrap Standard', addOnServiceGroupId: 'wrap', isApplicable: true, isMultiSelect: false, addOnPrice: 5 }),
        imageDetail: <imageDetail>{ alternateText: 'image not available', largeImg: '', thumbNailImg: '' },
        minOrderSize: 1,
        maxOrderSize: 10,
        productTaxDetail: <productTaxDetail>{ taxType: taxType.Standard, taxPercentage: 0.05 }
    },
    <productDetails>{
        productId: '6',
        prodctType: ProductType.Physical,
        productDescription: '',
        price: 100,
        productName: 'Bowling Set',
        promoCode: <promoCode>{ isPromoCodeAvailable: true, promoCode: 'WELCOME10', validTill: new Date(new Date().getTime() + 24 * 60 * 60 * 1000) },
        discount: <productDiscountDetail>{ discountType: productDiscountType.FlatPrice, discountFlatePrice: 10 },
        maxDiscount: 20,
        addOns: new Array<addOns>(<addOns>{ addOnId: 'ad123', addOnName: 'Gift Wrap Standard', addOnServiceGroupId: 'wrap', isApplicable: true, isMultiSelect: false, addOnPrice: 5 }),
        imageDetail: <imageDetail>{ alternateText: 'image not available', largeImg: '', thumbNailImg: '' },
        minOrderSize: 1,
        maxOrderSize: 10,
        productTaxDetail: <productTaxDetail>{ taxType: taxType.Standard, taxPercentage: 0.05 }
    },
    <productDetails>{
        productId: '7',
        prodctType: ProductType.Physical,
        productDescription: '',
        price: 100,
        productName: 'Shape Sorter',
        promoCode: <promoCode>{ isPromoCodeAvailable: true, promoCode: 'WELCOME10', validTill: new Date(new Date().getTime() + 24 * 60 * 60 * 1000) },
        discount: <productDiscountDetail>{ discountType: productDiscountType.FlatPrice, discountFlatePrice: 10 },
        maxDiscount: 20,
        addOns: new Array<addOns>(<addOns>{ addOnId: 'ad123', addOnName: 'Gift Wrap Standard', addOnServiceGroupId: 'wrap', isApplicable: true, isMultiSelect: false, addOnPrice: 5 }),
        imageDetail: <imageDetail>{ alternateText: 'image not available', largeImg: '', thumbNailImg: '' },
        minOrderSize: 1,
        maxOrderSize: 10,
        productTaxDetail: <productTaxDetail>{ taxType: taxType.Standard, taxPercentage: 0.05 }
    },
    <productDetails>{
        productId: '8',
        prodctType: ProductType.Physical,
        productDescription: '',
        price: 100,
        productName: 'Shape Sorter',
        promoCode: <promoCode>{ isPromoCodeAvailable: true, promoCode: 'WELCOME10', validTill: new Date(new Date().getTime() + 24 * 60 * 60 * 1000) },
        discount: <productDiscountDetail>{ discountType: productDiscountType.FlatPrice, discountFlatePrice: 10 },
        maxDiscount: 20,
        addOns: new Array<addOns>(<addOns>{ addOnId: 'ad123', addOnName: 'Gift Wrap Standard', addOnServiceGroupId: 'wrap', isApplicable: true, isMultiSelect: false, addOnPrice: 5 }),
        imageDetail: <imageDetail>{ alternateText: 'image not available', largeImg: '', thumbNailImg: '' },
        minOrderSize: 1,
        maxOrderSize: 10,
        productTaxDetail: <productTaxDetail>{ taxType: taxType.Standard, taxPercentage: 0.05 }
    },
    <productDetails>{
        productId: '9',
        prodctType: ProductType.Physical,
        productDescription: '',
        price: 100,
        productName: 'Building Bricks',
        promoCode: <promoCode>{ isPromoCodeAvailable: true, promoCode: 'WELCOME10', validTill: new Date(new Date().getTime() + 24 * 60 * 60 * 1000) },
        discount: <productDiscountDetail>{ discountType: productDiscountType.FlatPrice, discountFlatePrice: 10 },
        maxDiscount: 20,
        addOns: new Array<addOns>(<addOns>{ addOnId: 'ad123', addOnName: 'Gift Wrap Standard', addOnServiceGroupId: 'wrap', isApplicable: true, isMultiSelect: false, addOnPrice: 5 }),
        imageDetail: <imageDetail>{ alternateText: 'image not available', largeImg: '', thumbNailImg: '' },
        minOrderSize: 1,
        maxOrderSize: 10,
        productTaxDetail: <productTaxDetail>{ taxType: taxType.Standard, taxPercentage: 0.05 }
    },
    <productDetails>{
        productId: '10',
        prodctType: ProductType.Physical,
        productDescription: '',
        price: 100,
        productName: 'Xylophone',
        promoCode: <promoCode>{ isPromoCodeAvailable: true, promoCode: 'WELCOME10', validTill: new Date(new Date().getTime() + 24 * 60 * 60 * 1000) },
        discount: <productDiscountDetail>{ discountType: productDiscountType.FlatPrice, discountFlatePrice: 10 },
        maxDiscount: 20,
        addOns: new Array<addOns>(<addOns>{ addOnId: 'ad123', addOnName: 'Gift Wrap Standard', addOnServiceGroupId: 'wrap', isApplicable: true, isMultiSelect: false, addOnPrice: 5 }),
        imageDetail: <imageDetail>{ alternateText: 'image not available', largeImg: '', thumbNailImg: '' },
        minOrderSize: 1,
        maxOrderSize: 10,
        productTaxDetail: <productTaxDetail>{ taxType: taxType.Standard, taxPercentage: 0.05 }
    },
    <productDetails>{
        productId: '11',
        prodctType: ProductType.Physical,
        productDescription: '',
        price: 100,
        productName: 'Toy Train',
        promoCode: <promoCode>{ isPromoCodeAvailable: true, promoCode: 'WELCOME10', validTill: new Date(new Date().getTime() + 24 * 60 * 60 * 1000) },
        discount: <productDiscountDetail>{ discountType: productDiscountType.FlatPrice, discountFlatePrice: 10 },
        maxDiscount: 20,
        addOns: new Array<addOns>(<addOns>{ addOnId: 'ad123', addOnName: 'Gift Wrap Standard', addOnServiceGroupId: 'wrap', isApplicable: true, isMultiSelect: false, addOnPrice: 5 }),
        imageDetail: <imageDetail>{ alternateText: 'image not available', largeImg: '', thumbNailImg: '' },
        minOrderSize: 1,
        maxOrderSize: 10,
        productTaxDetail: <productTaxDetail>{ taxType: taxType.Standard, taxPercentage: 0.05 }
    },
    <productDetails>{
        productId: '12',
        prodctType: ProductType.Physical,
        productDescription: '',
        price: 100,
        productName: 'Kids Tool Box',
        promoCode: <promoCode>{ isPromoCodeAvailable: true, promoCode: 'WELCOME10', validTill: new Date(new Date().getTime() + 24 * 60 * 60 * 1000) },
        discount: <productDiscountDetail>{ discountType: productDiscountType.FlatPrice, discountFlatePrice: 10 },
        maxDiscount: 20,
        addOns: new Array<addOns>(<addOns>{ addOnId: 'ad123', addOnName: 'Gift Wrap Standard', addOnServiceGroupId: 'wrap', isApplicable: true, isMultiSelect: false, addOnPrice: 5 }),
        imageDetail: <imageDetail>{ alternateText: 'image not available', largeImg: '', thumbNailImg: '' },
        minOrderSize: 1,
        maxOrderSize: 10,
        productTaxDetail: <productTaxDetail>{ taxType: taxType.Standard, taxPercentage: 0.05 }
    },
    <productDetails>{
        productId: '13',
        prodctType: ProductType.Physical,
        productDescription: '',
        price: 100,
        productName: 'Spinning Toy',
        promoCode: <promoCode>{ isPromoCodeAvailable: true, promoCode: 'WELCOME10', validTill: new Date(new Date().getTime() + 24 * 60 * 60 * 1000) },
        discount: <productDiscountDetail>{ discountType: productDiscountType.FlatPrice, discountFlatePrice: 10 },
        maxDiscount: 20,
        addOns: new Array<addOns>(<addOns>{ addOnId: 'ad123', addOnName: 'Gift Wrap Standard', addOnServiceGroupId: 'wrap', isApplicable: true, isMultiSelect: false, addOnPrice: 5 }),
        imageDetail: <imageDetail>{ alternateText: 'image not available', largeImg: '', thumbNailImg: '' },
        minOrderSize: 1,
        maxOrderSize: 10,
        productTaxDetail: <productTaxDetail>{ taxType: taxType.Standard, taxPercentage: 0.05 }
    }
);

const getProductListingData = (): Array<productDetails> => {
    return productList;
};

export default {
    getProductListingData
};
