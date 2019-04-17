import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CompanyService } from '../services/company.service';
var CompanyDetailsComponent = /** @class */ (function () {
    function CompanyDetailsComponent(_companyService) {
        this._companyService = _companyService;
        this.isCompanySelected = false;
        //animation
        this.display_loading = 'block';
        this.display_view = 'none';
        this.returnToList = new EventEmitter();
        this._companyId = 0;
    }
    CompanyDetailsComponent.prototype.returnBackToList = function () {
        //animation
        this.display_view = 'none';
        this.returnToList.emit(null);
    };
    Object.defineProperty(CompanyDetailsComponent.prototype, "companyId", {
        get: function () { return this._companyId; },
        set: function (value) {
            var _this = this;
            //animation
            this.display_loading = 'block';
            this.display_view = 'none';
            this._companyId = +value;
            this._companyService.getCompany(this.companyId)
                .subscribe(function (c) {
                _this.isCompanySelected = true;
                //animation
                _this.display_loading = 'none';
                _this.display_view = 'block';
                _this.company = c.find(function (a) { return a.id == _this._companyId; });
            });
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], CompanyDetailsComponent.prototype, "returnToList", void 0);
    tslib_1.__decorate([
        Input('companyId'),
        tslib_1.__metadata("design:type", Number),
        tslib_1.__metadata("design:paramtypes", [Number])
    ], CompanyDetailsComponent.prototype, "companyId", null);
    CompanyDetailsComponent = tslib_1.__decorate([
        Component({
            selector: 'company-details',
            template: "<div id=\"header\" *ngIf=\"isCompanySelected\">\n\t<button\n      (click)=\"returnBackToList()\"\n        mat-icon-button >\n        <mat-icon >arrow_back_ios</mat-icon>\n      </button>\n      <span class=\"back-header\">Firma Detaylar\u0131</span>\n</div>\n<div id=\"content\">\n  <mat-card class=\"mat-elevation-z1\">\n    <mat-card-title>\n      Genel Bilgiler\n    </mat-card-title>\n    <mat-card-content [style.display]=\"display_loading\">\n      <img src=\"https://loading.io/spinners/ellipsis/lg.discuss-ellipsis-preloader.gif\" height=\"60\" >\n    </mat-card-content> \n    <mat-card-content  [style.display]=\"display_view\">      \n      <h4>Firma Ad\u0131 : {{company?.name}}</h4>\n      <h4>Adres :\t{{company?.address}} </h4>\n    </mat-card-content>\n  </mat-card>\n  <mat-card class=\"mat-elevation-z1\">\n    <mat-card-title>\n      Firma Kullan\u0131c\u0131lar\u0131\n    </mat-card-title>\n    <mat-card-content>\n      <table mat-table  [dataSource]=\"company?.users\" class=\"mat-elevation-z0\">\n          <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef> \u0130sim </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n          </ng-container>\n          <ng-container matColumnDef=\"surname\">\n            <th mat-header-cell *matHeaderCellDef> Soyisim </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.surname}} </td>\n          </ng-container>\n          <ng-container matColumnDef=\"phonenumber\">\n            <th mat-header-cell *matHeaderCellDef> Telefon No. </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.phonenumber}} </td>\n          </ng-container>\n          <ng-container matColumnDef=\"mail\">\n            <th mat-header-cell *matHeaderCellDef>E-Mail </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.mail}} </td>\n          </ng-container>\n        <tr mat-header-row *matHeaderRowDef=\"['name', 'surname','phonenumber','mail']\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: ['name', 'surname','phonenumber','mail']\"></tr>\n      </table>\n    </mat-card-content>\n  </mat-card>\n</div>",
            styles: [":host{font-family:\"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif'\"}table{width:100%}mat-card{margin-top:10px}mat-card-title{border-bottom:1px solid gray;padding-bottom:5px;display:flex;flex:1 0 0}.back-header{margin:auto 1px;font-size:180%;font-family:serif}#header{display:flex}mat-card:not([class*=mat-elevation-z]){box-shadow:none!important}"]
        }),
        tslib_1.__metadata("design:paramtypes", [CompanyService])
    ], CompanyDetailsComponent);
    return CompanyDetailsComponent;
}());
export { CompanyDetailsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFueS1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbXBhbnkvIiwic291cmNlcyI6WyJsaWIvY29tcGFueS1kZXRhaWxzL2NvbXBhbnktZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBUTdEO0lBYUUsaUNBQW9CLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQVhuRCxzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDMUIsV0FBVztRQUNYLG9CQUFlLEdBQUcsT0FBTyxDQUFDO1FBQzFCLGlCQUFZLEdBQUcsTUFBTSxDQUFDO1FBQ1osaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBUXBDLGVBQVUsR0FBRyxDQUFDLENBQUM7SUFEZ0MsQ0FBQztJQU54RCxrREFBZ0IsR0FBaEI7UUFDSyxXQUFXO1FBQ2QsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUlELHNCQUFJLDhDQUFTO2FBQWIsY0FBMEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzthQUVuRCxVQUFjLEtBQWE7WUFEM0IsaUJBZ0JDO1lBZEUsV0FBVztZQUNaLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO1lBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1lBRTNCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztpQkFDNUMsU0FBUyxDQUFDLFVBQUMsQ0FBWTtnQkFDdEIsS0FBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztnQkFDN0IsV0FBVztnQkFDWixLQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztnQkFDOUIsS0FBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7Z0JBRTVCLEtBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLElBQUksS0FBSSxDQUFDLFVBQVUsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO1lBQ3RELENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQzs7O09BakJrRDtJQVR6QztRQUFULE1BQU0sRUFBRTs7aUVBQW1DO0lBVzVDO1FBREMsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7OzREQWdCbEI7SUFoQ1UsdUJBQXVCO1FBTG5DLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsZ3BFQUErQzs7U0FFaEQsQ0FBQztpREFjcUMsY0FBYztPQWJ4Qyx1QkFBdUIsQ0FpQ25DO0lBQUQsOEJBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQWpDWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcGFueVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb21wYW55LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcGFueSB9IGZyb20gJy4uL21vZGVscy9jb21wYW55JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29tcGFueS1kZXRhaWxzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBhbnktZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbXBhbnktZGV0YWlscy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29tcGFueURldGFpbHNDb21wb25lbnQge1xuICBjb21wYW55OiBDb21wYW55O1xuICBpc0NvbXBhbnlTZWxlY3RlZCA9IGZhbHNlO1xuICAvL2FuaW1hdGlvblxuICBkaXNwbGF5X2xvYWRpbmcgPSAnYmxvY2snO1xuICBkaXNwbGF5X3ZpZXcgPSAnbm9uZSc7XG4gIEBPdXRwdXQoKSByZXR1cm5Ub0xpc3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHJldHVybkJhY2tUb0xpc3QoKSB7XG4gICAgICAgLy9hbmltYXRpb25cbiAgICB0aGlzLmRpc3BsYXlfdmlldyA9ICdub25lJztcbiAgICB0aGlzLnJldHVyblRvTGlzdC5lbWl0KG51bGwpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29tcGFueVNlcnZpY2U6IENvbXBhbnlTZXJ2aWNlKSB7IH1cbiAgcHJpdmF0ZSBfY29tcGFueUlkID0gMDtcbiAgZ2V0IGNvbXBhbnlJZCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fY29tcGFueUlkOyB9XG4gIEBJbnB1dCgnY29tcGFueUlkJylcbiAgc2V0IGNvbXBhbnlJZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgIC8vYW5pbWF0aW9uXG4gICAgdGhpcy5kaXNwbGF5X2xvYWRpbmcgPSAnYmxvY2snO1xuICAgIHRoaXMuZGlzcGxheV92aWV3ID0gJ25vbmUnO1xuXG4gICAgdGhpcy5fY29tcGFueUlkID0gK3ZhbHVlO1xuICAgIHRoaXMuX2NvbXBhbnlTZXJ2aWNlLmdldENvbXBhbnkodGhpcy5jb21wYW55SWQpXG4gICAgICAuc3Vic2NyaWJlKChjOiBDb21wYW55W10pID0+IHtcbiAgICAgICAgdGhpcy5pc0NvbXBhbnlTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAvL2FuaW1hdGlvblxuICAgICAgICB0aGlzLmRpc3BsYXlfbG9hZGluZyA9ICdub25lJztcbiAgICAgICAgdGhpcy5kaXNwbGF5X3ZpZXcgPSAnYmxvY2snO1xuXG4gICAgICAgIHRoaXMuY29tcGFueSA9IGMuZmluZChhID0+IGEuaWQgPT0gdGhpcy5fY29tcGFueUlkKTtcbiAgICAgIH0pXG4gIH1cbn1cblxuIl19