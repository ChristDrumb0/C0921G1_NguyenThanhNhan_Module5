import {CustomerType} from "./customer-type";

export interface Customer {
  id: string;
  name?: string;
  dob?: string;
  gender?: number;
  personalId?: string;
  phone?: string;
  email?: string;
  customerType?: CustomerType;
  address?: string;
}
