import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company';
export declare class CompanyService {
    private http;
    rootPath: string;
    constructor(http: HttpClient);
    getCompany(id: number): Observable<Company[]>;
    temp_getCompany(id: number): any;
    temp_getCompany1(id: number): any;
    getCompanies(): Observable<any>;
}
