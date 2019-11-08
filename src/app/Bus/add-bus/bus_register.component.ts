import { Component, OnInit } from '@angular/core';
import { BusService } from '../../shared/bus.service';
import { Bus } from '../../model/bus';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'bus-register',
    templateUrl: 'bus_register.component.html'
})

export class BusRegisterComponent implements OnInit {
    bus: Bus;
    constructor(private busservice: BusService, private nav: Router, private route: ActivatedRoute, private toastr: ToastrService) {
        this.bus = new Bus;

    }

    ngOnInit() { }
    create() {
        this.busservice.createbus(this.bus).subscribe((response) => {
            console.log("New Bus Created")
            this.toastr.success("---------")
            this.nav.navigate(["/busget"]);

        })
    }
}