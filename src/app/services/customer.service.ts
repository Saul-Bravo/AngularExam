import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public customers = [
    {
      id: 1,
      name: "Alejandro",
      phone: "6141234567"
    },
    {
      id: 2,
      name: "María",
      phone: "6141234567"
    },
    {
      id: 3,
      name: "Marcos",
      phone: "6141234567"
    },
    {
      id: 4,
      name: "Adrián",
      phone: "6141234567"
    }
  ];

  constructor() { }

  GetCustomers() {
    return this.customers;
  }
}
