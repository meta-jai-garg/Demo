import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.css']
})
export class SearchCustomersComponent implements OnInit {

  age: number;
  customers: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.age = 0;
  }

  private searchCustomer() {
    this.customerService.getCustomersByAge(this.age)
      .subscribe(customers => this.customers = customers);
  }

  onSubmit() {
    console.log("jdfjdf");
    this.searchCustomer();
  }
}
