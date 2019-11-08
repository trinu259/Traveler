import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bus } from '../model/bus';


@Injectable()
export class BusService {
    private _baseUrl: string = "http://localhost:3000/bus/";


    constructor(private http: HttpClient) {

    }
    getAllBus() {
        return this.http.get("http://localhost:3000/bus/"+ "getallbus");
    }
    byid(id: number) {
        return this.http.get("http://localhost:3000/bus/"+ "getby/" + id);
    }
    createbus(data:Bus) {
        return this.http.post("http://localhost:3000/bus/"+ "createtbus",data);
    }
    deletebus(id: number){
        return this.http.delete("http://localhost:3000/bus/"+"deletebus/"+id)
    }
     updatebus(bus:Bus){
         return this.http.put("http://localhost:3000/bus/updatebus/"+bus.id,bus);
    }
}
