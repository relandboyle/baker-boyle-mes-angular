import { Address } from './address-model';

export interface Customer {
  custId: string;
  firstName: string;
  lastName: string;
  // address: Address[];
  phonePrimary: string;
  phoneSecondary: string;
  email: string;
  // salesOrders: string[];
  // createdDate: string;
}