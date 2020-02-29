

import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';

import { ApiService } from './../service/api.service';
import { FormControl, Validators, FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],

})
export class NewComponent implements OnInit {
  Service: any = [];
  selectedServices: number[];
  total: any;
  submittedServices: boolean=false;
  cardTitle: string = "Select Your Services";
  Order: any = {};
  Customer: any = {};

  LastCustomer:any = {};
  LastCustomerId: string = "";

  LastOrder:any = {};
  LastOrderId: string = "";

  customerSubmitted: boolean =false;
  customerForm: FormGroup;
  orderCreated: boolean=false;
  orderSubmitted: boolean=false;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.readService();
  }


  readService(){
    this.apiService.getServices().subscribe((data) => {
     this.Service = data;
    })
  }
  ngOnInit() {
    //hard coded test values
    // this.Service = [
    //   //  {name:"Password Reset", price: 39.99},
    //   //  {name:"Spyware Removal", price: 99.99},
    //   //  {name:"RAM Upgrade", price: 129.99},
    //   //  {name:"Software Installation", price: 49.99},
    //   //  {name:"Tune-up", price: 89.99},
    //   //  {name:"Keyboard Cleaning", price: 45.00},
    //   //  {name:"Disk lean-up", price: 149.99}
    // ];

    //hard coded order
    // this.Order = {
    //   customerId: "12345",
    //   services: [
    //        {name:"Password Reset", price: 39.99},
    //        {name:"Spyware Removal", price: 99.99},
    //        {name:"RAM Upgrade", price: 129.99},
    //        {name:"Software Installation", price: 49.99},
    //        {name:"Tune-up", price: 89.99},
    //        {name:"Keyboard Cleaning", price: 45.00},
    //        {name:"Disk lean-up", price: 149.99}
    //     ],
    //   servicesTotal: 51.99,
    //   partsTotal: 64.99,
    //   laborTotal: 200,
    //   grandTotal: 100
    // }
    //end hard coded order

    //hard coded customer
    // this.Customer = {
    //   firstName: "josh",
    //   lastName: "Hughes",
    //   address1: "1234 st",
    //   address2: "",
    //   city: "mesa",
    //   state: "AZ",
    //   zip: "85202",
    //   phone: "1234567890",
    //   email: "email@email.com"
    // };

  }
  onGroupsChange(selectedServices: number[]) {
    console.log(selectedServices);
    this.total=(selectedServices.reduce((b, a) => b + a['price'],0)).toFixed(2);//rounds total to 2 decimal place
    // console.log(this.total);
  }
  onSubmitServices(){
    // console.log(this.submittedServices);//before
    this.submittedServices=true;
    this.cardTitle = "Enter Your information";
    // console.log(this.submittedServices);
    this.mainForm();
  }

  //order components

  onCreateOrder(){
    this.Order = {
      customerId: this.LastCustomerId,
      services: this.selectedServices,
      servicesTotal: this.total,
      laborHours: 0,
      partsTotal: 0,
      laborTotal: 0,
      grandTotal: 0,
      status: "Pending"
    };
    console.log(this.Order);
    console.log('Order successfully created!');
    this.orderCreated = true;

  }


  onSubmitOrder() {
      this.apiService.createOrder(this.Order).subscribe(
        (res) => {
          console.log('Order successfully submitted!');
          console.log(this.Order);
          this.orderSubmitted=true;
          this.cardTitle = "Thank you for your Order!"

          if(this.orderSubmitted){
            // get last inserted order
            this.apiService.getLastOrder().subscribe(
              (res) => {
                console.log(' last order successfully got!');
                this.LastOrderId=res[0]._id;
                this.LastOrder = res;
                console.log(this.LastOrder);
                console.log(this.LastOrderId);
                // this.ngZone.run(() => this.router.navigateByUrl('/orders-list'))
              }, (error) => {
                console.log(error);
              });
          }
          else{
            return false;
          }
          // this.ngZone.run(() => this.router.navigateByUrl('/orders-list'))

        }, (error) => {
          console.log(error);
        });



  }

//end order components

//customer


mainForm() {
  this.customerForm = this.fb.group({
    firstName : ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    address1: ['', [Validators.required]],
    address2: [''],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    zip: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    email: ['', [Validators.required]]
  })
}

  // Getter to access form control
  get myForm(){
    return this.customerForm.controls;
  }

onSubmitCustomer() {
  this.customerSubmitted = true;
  this.cardTitle = "Review Your Order";
    if (!this.customerForm.valid) {
      return false;
    } else {
      this.apiService.createCustomer(this.customerForm.value).subscribe(
        (res) => {
          console.log('Customer successfully created!')
          // this.ngZone.run(() => this.router.navigateByUrl('/orders-list'))
        }, (error) => {
          console.log(error);
        });

      // get last inserted customer
      this.apiService.getLastCustomer().subscribe(
        (res) => {
          console.log(' last Customer successfully created!');
          this.LastCustomerId=res[0]._id;
          this.LastCustomer = res;
          console.log(this.LastCustomer);
          console.log(this.LastCustomerId);
          this.onCreateOrder();
          // this.ngZone.run(() => this.router.navigateByUrl('/orders-list'))
        }, (error) => {
          console.log(error);
        });


    }

}


}
