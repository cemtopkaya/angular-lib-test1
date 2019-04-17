import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class SettingsService {
    private http;
    constructor(http: HttpClient);
    getSettings(): Observable<any>;
}
