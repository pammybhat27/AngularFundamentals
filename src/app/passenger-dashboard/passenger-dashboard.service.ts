import {Passenger} from './model/passenger.interface';
import {HttpClient} from '@angular/common/http';

export class PassengerDashboardService {
  constructor(private httpClient: HttpClient) {
    console.log(httpClient);
  }

  getPassengers(): Passenger[] {
      return [{
        id: 1,
        fullName: 'Stephen',
        checkedIn: true,
        checkInDate: 1490742000000,
        children: [{name: 'Ted', age: 12}]
      },
        {
          id: 2,
          fullName: 'Rose',
          checkedIn: false,
          children: null

        },
        {
          id: 3,
          fullName: 'Testing',
          checkedIn: false,
          children: null

        }
      ];



  }




}
