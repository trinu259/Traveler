import { NgModule } from '@angular/core';
import { BusGetComponent } from './bus_get.component';
import { CommonModule } from '@angular/common';
import { BusRegisterComponent } from './bus_register.component';
import { HomeComponent } from '../home.component';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BusService } from '../shared/bus.service';
import { BusByIdComponent } from './busById.component';
import { FormsModule } from "@angular/forms";
var route = [
    { path: "busget", component: BusGetComponent },
    { path: "busregister", component: BusRegisterComponent },
    { path: "home", component: HomeComponent },
    { path: "busbyid/:id", component: BusByIdComponent }
]

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(route),FormsModule,AgGridModule.withComponents([]), BrowserAnimationsModule, HttpClientModule, ToastrModule.forRoot({positionClass:"toast-top-right"})],
    declarations: [BusGetComponent,BusByIdComponent, BusRegisterComponent, HomeComponent],
    providers: [BusService, ToastrService],
})
export class BusModule { }
