import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Bus } from '../../model/bus';
import { BusService } from '../../shared/bus.service';
@Component({
    selector: 'edit-bus',
    templateUrl: 'edit_bus.component.html'
})

export class EditBusComponent {
    bus:Bus;
    editForm: FormGroup;
    constructor(private formBuilder: FormBuilder,private router: Router, private busService: BusService, private route: ActivatedRoute) { }
  
    update()
    {
     
      this.router.navigate(["/editbus"]);
    }
   
  }