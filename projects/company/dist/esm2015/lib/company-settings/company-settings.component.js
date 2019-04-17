import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SettingsService } from '../services/settings.service';
let CompanySettingsComponent = class CompanySettingsComponent {
    constructor(_setService) {
        this._setService = _setService;
    }
    ngOnInit() {
        this.fetchSettings();
    }
    fetchSettings() {
        this._setService.getSettings().subscribe(result => {
            this.settings = result;
        });
        console.log('settings: ' + this.settings);
    }
};
CompanySettingsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-company-settings',
        template: "  <mat-card-title>\n\t\tListe Ayarlar\u0131\n\t</mat-card-title>\n\t<mat-card-content>\n     <div>\n          <h3 class=\"card-row\">Birinci S\u00FCtun Bilgisi : </h3>\n          <select name=\"\" id=\"\">\n              <option  *ngFor=\"let s of settings.data\" >{{s}}</option>\n          </select>\n      </div>\n       <div>\n          <h3 class=\"card-row\">\u0130kinci S\u00FCtun Bilgisi : </h3>\n          <select name=\"\" id=\"\">\n              <option  *ngFor=\"let s of settings.data\" >{{s}}</option>\n          </select>\n      </div>\n       <div>\n          <h3 class=\"card-row\">\u00DC\u00E7\u00FCnc\u00FC S\u00FCtun Bilgisi : </h3>\n          <select name=\"\" id=\"\">\n              <option  *ngFor=\"let s of settings.data\" >{{s}}</option>\n          </select>\n      </div>\n      <div style=\"text-align:right;\"> \n        <button mat-stroked-button style=\"background-color:#fff\">Kaydet</button>\n      </div>\n   </mat-card-content>\n",
        styles: [":host{width:100%;height:100%}mat-card-title{border-bottom:1px solid gray;padding-bottom:5px;display:flex;flex:1 0 0}.card-row{display:inline-table;margin:2%}"]
    }),
    tslib_1.__metadata("design:paramtypes", [SettingsService])
], CompanySettingsComponent);
export { CompanySettingsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFueS1zZXR0aW5ncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb21wYW55LyIsInNvdXJjZXMiOlsibGliL2NvbXBhbnktc2V0dGluZ3MvY29tcGFueS1zZXR0aW5ncy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBVS9ELElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBRW5DLFlBQW9CLFdBQTRCO1FBQTVCLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtJQUFHLENBQUM7SUFFcEQsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0QsYUFBYTtRQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FDRixDQUFBO0FBYlksd0JBQXdCO0lBTHBDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxzQkFBc0I7UUFDaEMsKzhCQUFnRDs7S0FFakQsQ0FBQzs2Q0FHaUMsZUFBZTtHQUZyQyx3QkFBd0IsQ0FhcEM7U0FiWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvc2V0dGluZ3Muc2VydmljZSc7XG5cbmludGVyZmFjZSBJQ29tcGFueVNldHRpbmdzIHtcbiAgZGF0YTogc3RyaW5nW107XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY29tcGFueS1zZXR0aW5ncycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wYW55LXNldHRpbmdzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29tcGFueS1zZXR0aW5ncy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29tcGFueVNldHRpbmdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc2V0dGluZ3M6IElDb21wYW55U2V0dGluZ3M7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NldFNlcnZpY2U6IFNldHRpbmdzU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZldGNoU2V0dGluZ3MoKTtcbiAgfVxuICBmZXRjaFNldHRpbmdzKCkge1xuICAgIHRoaXMuX3NldFNlcnZpY2UuZ2V0U2V0dGluZ3MoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIHRoaXMuc2V0dGluZ3MgPSByZXN1bHQ7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coJ3NldHRpbmdzOiAnICsgdGhpcy5zZXR0aW5ncyk7XG4gIH1cbn1cbiJdfQ==