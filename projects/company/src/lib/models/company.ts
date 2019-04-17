export class Company {
  id : number;
  name : string;
  address : Address;
  users : User[];
  }

  export class Address {
    location : Coordinate;
  }

  export class Coordinate {
    latitude : number;
    longtitude : number;
  }

  export class User {
    id : number;
    name : string;
    surname : string;
    phonenumber : string;
    mail : string;
  }

  