import { Component, OnInit } from '@angular/core';
import { BusService } from '../shared/bus.service';
import { Bus } from '../model/bus';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "bus-get",
  templateUrl: "bus_get.component.html",


})


export class BusGetComponent implements OnInit {
  bus: Bus[];
  private gridApi;
  private gridColumnApi;
  private rowData;
  private columnDefs;
  private columnTypes;
  private defaultColDef;
  private paginationPageSize;
  id: number;

  constructor(private busService: BusService, private http: HttpClient, private toastr: ToastrService) {
    this.columnDefs = [
      {
        headerName: 'Id', field: 'id', sortable: true, filter: true,
        cellRenderer: (id) =>
          `<a href="/busbyid/${id.value}" >${id.value}</a>`
      },
      { headerName: 'Depo', field: 'depo', sortable: true, filter: true },
      { headerName: 'To', field: 'to', sortable: true, filter: true },
      { headerName: 'From', field: 'from', sortable: true, filter: true },
      { headerName: 'Driver', field: 'driver', sortable: true, filter: true },
      { headerName: 'TotalSeats', field: 'totalseats', sortable: true, filter: true },
      {
        headerName: 'AvilableSeats', field: 'avilableseats', sortable: true, filter: true,
        cellClassRules: {
          "rag-red": "x < 10",
          "rag-green": "x >= 10 && x < 25",
          "rag-blue": "x >= 25 && x < 35",
          "rag-orange": "x >= 35 && x < 45",
          "rag-grey": "x >= 45 && x<60",
          "rag-yellow": "x >= 55 && x <70",
        }
      }
    ];

    this.paginationPageSize = 20;
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http.get("http://localhost:3000/bus/buses").subscribe(response => {
      this.toastr.success("updated");
      this.rowData = response;
    });
  }
  ngOnInit() { }

  /**ngOnInit() {
      this.http.get("http://localhost:3000/bus/getby/" + this.id).subscribe((response) => {
        this.bus = <Bus[]>response;
    })
    }*/


}