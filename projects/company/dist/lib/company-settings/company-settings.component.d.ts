import { OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
interface ICompanySettings {
    data: string[];
}
export declare class CompanySettingsComponent implements OnInit {
    private _setService;
    settings: ICompanySettings;
    constructor(_setService: SettingsService);
    ngOnInit(): void;
    fetchSettings(): void;
}
export {};
