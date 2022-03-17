import {Category} from './category';

export interface Customer {
  id: number;
  name: string;
  dob: string;
  gender: number;
  email: string;
  phone: string;
  address: string;
  category: Category;
}
