export declare class Company {
    id: number;
    name: string;
    address: Address;
    users: User[];
}
export declare class Address {
    location: Coordinate;
}
export declare class Coordinate {
    latitude: number;
    longtitude: number;
}
export declare class User {
    id: number;
    name: string;
    surname: string;
    phonenumber: string;
    mail: string;
}
