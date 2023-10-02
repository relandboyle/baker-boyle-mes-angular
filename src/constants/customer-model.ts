import { Address } from './address-model';

export interface Customer {
  customerId?: string;
  firstName: string;
  lastName: string;
  email: string;
}