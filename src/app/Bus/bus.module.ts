import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FormsModule } from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import { BusGetComponent } from './get-bus/bus_get.component';
import { BusRegisterComponent } from './add-bus/bus_register.component';
import { EditBusComponent } from './edit-bus/edit_bus.component';
import { BusByIdComponent } from './byid-bus/busById.component';
import { HomeComponent } from './home.component';
import { BusService } from '../shared/bus.service';

var route = [
    { path: "busget", component: BusGetComponent },
    { path: "busregister", component: BusRegisterComponent },
    { path: "editbus", component: EditBusComponent },
    { path: "busbyid/:id", component: BusByIdComponent },
    { path: "home", component: HomeComponent }
]

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(route),FormsModule,ReactiveFormsModule,AgGridModule.withComponents([]), BrowserAnimationsModule, HttpClientModule, ToastrModule.forRoot({positionClass:"toast-top-right"})],
    declarations: [BusGetComponent,BusByIdComponent, BusRegisterComponent,EditBusComponent, HomeComponent],
    providers: [BusService, ToastrService],
})
export class BusModule { }
