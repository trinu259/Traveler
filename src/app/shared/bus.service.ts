import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bus } from '../model/bus';


@Injectable()
export class BusService {
    private _baseUrl: string = "http://localhost:3000/bus/";


    constructor(private http: HttpClient) {

    }
    getAllBus() {
        return this.http.get(this._baseUrl + "getallbus");
    }
    byid(id: number) {
        return this.http.get(this._baseUrl + "getby/" + id);
    }
    createbus(data:Bus) {
        return this.http.post(this._baseUrl + "createtbus",data);
    }
    deletebus(id: number){
        return this.http.delete(this._baseUrl+"deletebus/"+id)
    }
    updatebus(id:number){
        return this.http.put("http://localhost:3000/bus/updatebus/"+id);
    }
}
