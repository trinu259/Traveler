import { Component, OnInit, Input } from '@angular/core';
import { BusService } from '../shared/bus.service';
import { Bus } from '../model/bus';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'bus-byid',
    templateUrl: 'busById.component.html'
})

export class BusByIdComponent implements OnInit {
    bus=new Bus;
    id: number;

    private routeSub: Subscription;
    constructor(private busService: BusService, private http: HttpClient, private route: ActivatedRoute, private nav: Router) { }
    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.id = params['id'];
        });
        this.http.get("http://localhost:3000/bus/getby/" + this.id).subscribe((response) => {
            this.bus = <Bus>response;
            console.log(this.bus)
        })
    }
    delete() {
        this.busService.deletebus(this.id).subscribe((response) => {
            this.nav.navigate["/busget"];
        })
    }
    update(){
        this.busService.updatebus("http://localhost:3000/bus/updatebus/"+this.bus.id,this.bus).subscribe((response)=>{
            alert("update success");
        })
    }
}