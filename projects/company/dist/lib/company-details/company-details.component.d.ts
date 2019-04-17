import { EventEmitter } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { Company } from '../models/company';
export declare class CompanyDetailsComponent {
    private _companyService;
    company: Company;
    isCompanySelected: boolean;
    display_loading: string;
    display_view: string;
    returnToList: EventEmitter<{}>;
    returnBackToList(): void;
    constructor(_companyService: CompanyService);
    private _companyId;
    companyId: number;
}
