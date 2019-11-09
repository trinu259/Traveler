import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Bus } from '../../model/bus';
import { BusService } from '../../shared/bus.service';
import { Subscription } from 'rxjs';
@Component({
    selector: 'edit-bus',
    templateUrl: 'edit_bus.component.html'
})

export class EditBusComponent implements OnInit{
    bus:Bus;
    id:number;
    private routeSub: Subscription;
    constructor(private formBuilder: FormBuilder,private router: Router, private busService: BusService, private route: ActivatedRoute) { }
  
    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.id = params['id'];
        });
    }
   
   
  }