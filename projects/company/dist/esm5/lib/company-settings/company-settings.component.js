import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SettingsService } from '../services/settings.service';
var CompanySettingsComponent = /** @class */ (function () {
    function CompanySettingsComponent(_setService) {
        this._setService = _setService;
    }
    CompanySettingsComponent.prototype.ngOnInit = function () {
        this.fetchSettings();
    };
    CompanySettingsComponent.prototype.fetchSettings = function () {
        var _this = this;
        this._setService.getSettings().subscribe(function (result) {
            _this.settings = result;
        });
        console.log('settings: ' + this.settings);
    };
    CompanySettingsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-company-settings',
            template: "  <mat-card-title>\n\t\tListe Ayarlar\u0131\n\t</mat-card-title>\n\t<mat-card-content>\n     <div>\n          <h3 class=\"card-row\">Birinci S\u00FCtun Bilgisi : </h3>\n          <select name=\"\" id=\"\">\n              <option  *ngFor=\"let s of settings.data\" >{{s}}</option>\n          </select>\n      </div>\n       <div>\n          <h3 class=\"card-row\">\u0130kinci S\u00FCtun Bilgisi : </h3>\n          <select name=\"\" id=\"\">\n              <option  *ngFor=\"let s of settings.data\" >{{s}}</option>\n          </select>\n      </div>\n       <div>\n          <h3 class=\"card-row\">\u00DC\u00E7\u00FCnc\u00FC S\u00FCtun Bilgisi : </h3>\n          <select name=\"\" id=\"\">\n              <option  *ngFor=\"let s of settings.data\" >{{s}}</option>\n          </select>\n      </div>\n      <div style=\"text-align:right;\"> \n        <button mat-stroked-button style=\"background-color:#fff\">Kaydet</button>\n      </div>\n   </mat-card-content>\n",
            styles: [":host{width:100%;height:100%}mat-card-title{border-bottom:1px solid gray;padding-bottom:5px;display:flex;flex:1 0 0}.card-row{display:inline-table;margin:2%}"]
        }),
        tslib_1.__metadata("design:paramtypes", [SettingsService])
    ], CompanySettingsComponent);
    return CompanySettingsComponent;
}());
export { CompanySettingsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFueS1zZXR0aW5ncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb21wYW55LyIsInNvdXJjZXMiOlsibGliL2NvbXBhbnktc2V0dGluZ3MvY29tcGFueS1zZXR0aW5ncy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBVS9EO0lBRUUsa0NBQW9CLFdBQTRCO1FBQTVCLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtJQUFHLENBQUM7SUFFcEQsMkNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0QsZ0RBQWEsR0FBYjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzdDLEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFaVSx3QkFBd0I7UUFMcEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQywrOEJBQWdEOztTQUVqRCxDQUFDO2lEQUdpQyxlQUFlO09BRnJDLHdCQUF3QixDQWFwQztJQUFELCtCQUFDO0NBQUEsQUFiRCxJQWFDO1NBYlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3NldHRpbmdzLnNlcnZpY2UnO1xuXG5pbnRlcmZhY2UgSUNvbXBhbnlTZXR0aW5ncyB7XG4gIGRhdGE6IHN0cmluZ1tdO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWNvbXBhbnktc2V0dGluZ3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29tcGFueS1zZXR0aW5ncy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbXBhbnktc2V0dGluZ3MuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbXBhbnlTZXR0aW5nc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHNldHRpbmdzOiBJQ29tcGFueVNldHRpbmdzO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zZXRTZXJ2aWNlOiBTZXR0aW5nc1NlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5mZXRjaFNldHRpbmdzKCk7XG4gIH1cbiAgZmV0Y2hTZXR0aW5ncygpIHtcbiAgICB0aGlzLl9zZXRTZXJ2aWNlLmdldFNldHRpbmdzKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICB0aGlzLnNldHRpbmdzID0gcmVzdWx0O1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdzZXR0aW5nczogJyArIHRoaXMuc2V0dGluZ3MpO1xuICB9XG59XG4iXX0=