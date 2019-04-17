import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, from } from 'rxjs';
import { find, first, filter, map, delay, concatMap } from 'rxjs/operators';
import { Company } from '../models/company';

@Injectable()
export class CompanyService {
  rootPath = '../../../../src/';
  constructor(private http: HttpClient) {}

  getCompany(id: number): Observable<Company[]> {
    console.log('gelen id:', id);
    return this.temp_getCompany(id);
  }

  temp_getCompany(id: number): any {
    return from(this.http.get(this.rootPath + 'assets/companies.json')).pipe(
      delay(1)
    );
  }

  temp_getCompany1(id: number): any {
    return this.http.get(this.rootPath + 'assets/companies.json');
  }

  getCompanies(): Observable<any> {
    return this.http.get('../../assets/companies.json');
  }
}
