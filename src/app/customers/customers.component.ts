import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  public customers:any;

  constructor(public customersApi: CustomerService) { }

  ngOnInit(): void {
    this.customers = this.customersApi.GetCustomers();
  }

}
