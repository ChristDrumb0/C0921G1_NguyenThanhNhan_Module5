import {Product} from './product';

export interface Stack {
  id: number;
  code: string;
  product: Product;
  amount: number;
  dateIn: string;
  madeDate: string;
  expired: string;
}
