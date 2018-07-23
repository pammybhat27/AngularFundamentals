interface Child {
  name: string;
  age: number;

}

interface  Passenger {
  id: number;
  fullName: string;
  checkedIn: boolean;
  checkInDate?: number;
  children: Child[] | null;
}
