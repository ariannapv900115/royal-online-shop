export interface Order {
  orderId: string;
  shippingAddress: {
    contact:{
      firstName: string;
      lastName: string;
      phoneNumbers:number
      email: string;
    }
    addressLine1: string;
    addressLine2: string;
    city: string;
    postCode: string;
    state: string;
  };
  paymentMethod: {
    accountName: string;
    csv: number;
    accountNumber: number;
    expirationDate: string;
  };
  totalAmount: number;
  productTotal: number;
}
