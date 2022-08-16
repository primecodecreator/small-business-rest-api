import { taxType } from '../../enum/tax-type';
export interface productTaxDetail {
    taxType: taxType;
    taxPercentage: number;
}
