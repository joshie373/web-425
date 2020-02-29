import { Order } from './../../model/Order';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})

export class OrderEditComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  orderData: Order[];

  GrandTotal:number;
  ServicesTotal: number;
  PartsTotal: number;

  LaborTotal: number;
  LaborHours:number=0;

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateOrder();
    this.TotalChange();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getOrder(id);
    this.editForm = this.fb.group({
      customerId: ['', [Validators.required]],
      servicesTotal: ['', [Validators.required]],
      laborHours: ['', [Validators.required]],
      partsTotal: ['', [Validators.required]],
      laborTotal: ['', [Validators.required]],
      grandTotal: ['', [Validators.required]],
      status: ['', [Validators.required]],

    })
  }


  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }


  onLaborChange(LaborHours: number) {
    this.LaborTotal=parseFloat((LaborHours *50).toFixed(2));//rounds total to 2 decimal place
    this.TotalChange();
  }



  onPartsChange(PartsTotal: number){
    this.PartsTotal=parseFloat((PartsTotal *1).toFixed(2));//rounds total to 2 decimal place
    this.TotalChange();
  }

  TotalChange(){
    this.GrandTotal = this.LaborTotal + this.ServicesTotal+ this.PartsTotal;
  }


  getOrder(id) {
    this.apiService.getOrder(id).subscribe(data => {
      this.editForm.setValue({
        customerId: data['customerId'],
        servicesTotal: data['servicesTotal'],
        laborHours: data['laborHours'],
        partsTotal: data['partsTotal'],
        laborTotal: data['laborTotal'],
        grandTotal: data['grandTotal'],
        status: data['status'],
      });
    });
  }

  updateOrder() {
    this.editForm = this.fb.group({
      customerId: ['', [Validators.required]],
      servicesTotal: ['', [Validators.required]],
      laborHours: ['', [Validators.required]],
      partsTotal: ['', [Validators.required]],
      laborTotal: ['', [Validators.required]],
      grandTotal: ['', [Validators.required]],
      status: ['', [Validators.required]],
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateOrder(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/orders-list');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }

}
