import {Passenger} from './model/passenger.interface';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';



const PASSENGER_API = '/api/passengers';
@Injectable()

export class PassengerDashboardService {
  constructor(private http: HttpClient) {
    console.log(http);
  }


  // Observable<Book[]> {
  // return this.http.get<Book[]>(this.bookUrl)


  getPassengers(): Observable<Passenger[]> {
   return this.http.get(PASSENGER_API);
  }


  }





