import { CompanyService } from '../services/company.service';
declare type PaneType = 'left' | 'right';
export declare class CompanyListComponent {
    private _compService;
    activePane: PaneType;
    isCompanySelected: boolean;
    companies: any[];
    selectedCompany: any;
    backtothelist: boolean;
    constructor(_compService: CompanyService);
    slideViews(): void;
    onSelection(company: any): void;
    ngOnInit(): void;
    onReturnToList(count: any): void;
}
export {};
