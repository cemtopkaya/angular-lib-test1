import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CompanyService } from '../services/company.service';
var CompanyListComponent = /** @class */ (function () {
    function CompanyListComponent(_compService) {
        this._compService = _compService;
        this.activePane = 'left';
        this.isCompanySelected = false;
        this.companies = [];
        this.backtothelist = true;
    }
    CompanyListComponent.prototype.slideViews = function () {
        console.log("this.activePane: ", this.activePane);
        this.activePane = this.activePane === 'left' ? 'right' : 'left';
    };
    CompanyListComponent.prototype.onSelection = function (company) {
        this.slideViews();
        this.isCompanySelected = true;
        this.selectedCompany = company;
        console.log("selected comp" + this.selectedCompany);
    };
    CompanyListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._compService.getCompanies()
            .subscribe(function (result) {
            _this.companies = result;
        });
        console.log("comp list ngOninit");
    };
    CompanyListComponent.prototype.onReturnToList = function (count) {
        this.slideViews();
        console.log(count);
        this.isCompanySelected = false;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], CompanyListComponent.prototype, "activePane", void 0);
    CompanyListComponent = tslib_1.__decorate([
        Component({
            selector: 'company-list',
            template: "<div class=\"container\" [@slide]=\"activePane\">\n\t\t<div>\n\t\t\t<table mat-table [dataSource]=\"companies\" class=\"mat-elevation-z1\">\n\t\t\t\t<ng-container matColumnDef=\"name\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>\u0130sim</th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let company\">{{company.name}}\n\t\t\t\t\t</td>\n\t\t\t\t</ng-container>\n\t\t\t\t<ng-container matColumnDef=\"location\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>Adres</th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let company\">{{company.address}}</td>\n\t\t\t\t</ng-container>\n\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"['name', 'location']\"></tr>\n\t\t\t\t<tr mat-row *matRowDef=\"let company; columns: ['name', 'location']\"(click)=\"onSelection(company)\"></tr>\n\t\t\t</table>\n\t\t</div>\n\t\t<div id=\"companyDetails\">\n\t\t\t<company-details (returnToList)='onReturnToList($event)' [companyId]=\"selectedCompany?.id\">\n\t\t\t</company-details>\n\t\t</div>\n</div>\n",
            animations: [
                trigger('slide', [
                    state('left', style({ transform: 'translateX(0)' })),
                    state('right', style({ transform: 'translateX(-50%)' })),
                    transition('* => *', animate(300))
                ])
            ],
            styles: ["table{width:100%}:host{display:block;overflow:hidden}.container{height:100%;width:200%;display:flex}.container div{margin:0 8px;flex:1}tr{cursor:pointer}th{cursor:not-allowed}tr:hover{background-color:#e2e2e2}.mat-card{width:100%;display:initial}mat-card:not([class*=mat-elevation-z]){box-shadow:none!important}"]
        }),
        tslib_1.__metadata("design:paramtypes", [CompanyService])
    ], CompanyListComponent);
    return CompanyListComponent;
}());
export { CompanyListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFueS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbXBhbnkvIiwic291cmNlcyI6WyJsaWIvY29tcGFueS1saXN0L2NvbXBhbnktbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUF3QixNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWpGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQWlCN0Q7SUFPRSw4QkFBb0IsWUFBNEI7UUFBNUIsaUJBQVksR0FBWixZQUFZLENBQWdCO1FBTnZDLGVBQVUsR0FBYSxNQUFNLENBQUM7UUFFdkMsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFFZixrQkFBYSxHQUFHLElBQUksQ0FBQztJQUVyQixDQUFDO0lBRUgseUNBQVUsR0FBVjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ2hELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3BFLENBQUM7SUFDQywwQ0FBVyxHQUFYLFVBQVksT0FBWTtRQUN0QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQTtRQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFO2FBQzdCLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDZixLQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsNkNBQWMsR0FBZCxVQUFlLEtBQUs7UUFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDO0lBaENRO1FBQVIsS0FBSyxFQUFFOzs0REFBK0I7SUFENUIsb0JBQW9CO1FBWmhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLDI5QkFBNEM7WUFFNUMsVUFBVSxFQUFFO2dCQUNWLE9BQU8sQ0FBQyxPQUFPLEVBQUU7b0JBQ2YsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztvQkFDcEQsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO29CQUN4RCxVQUFVLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDbkMsQ0FBQzthQUNIOztTQUNGLENBQUM7aURBUWtDLGNBQWM7T0FQckMsb0JBQW9CLENBa0NoQztJQUFELDJCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7U0FsQ1ksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmltcG9ydCB7IENvbXBhbnlTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY29tcGFueS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBhbnkgfSBmcm9tICcuLi9tb2RlbHMvY29tcGFueSc7XG5cbnR5cGUgUGFuZVR5cGUgPSAnbGVmdCcgfCAncmlnaHQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb21wYW55LWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29tcGFueS1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29tcGFueS1saXN0LmNvbXBvbmVudC5jc3MnXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ3NsaWRlJywgW1xuICAgICAgc3RhdGUoJ2xlZnQnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknIH0pKSxcbiAgICAgIHN0YXRlKCdyaWdodCcsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKScgfSkpLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiAqJywgYW5pbWF0ZSgzMDApKVxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29tcGFueUxpc3RDb21wb25lbnQgey8vIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgYWN0aXZlUGFuZTogUGFuZVR5cGUgPSAnbGVmdCc7XG5cbiAgaXNDb21wYW55U2VsZWN0ZWQgPSBmYWxzZTtcbiAgY29tcGFuaWVzID0gW107XG4gIHNlbGVjdGVkQ29tcGFueTogYW55O1xuICBiYWNrdG90aGVsaXN0ID0gdHJ1ZTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29tcFNlcnZpY2U6IENvbXBhbnlTZXJ2aWNlKSB7XG4gIH1cblxuc2xpZGVWaWV3cygpeyAgXG4gICAgY29uc29sZS5sb2coXCJ0aGlzLmFjdGl2ZVBhbmU6IFwiLHRoaXMuYWN0aXZlUGFuZSlcbiAgICB0aGlzLmFjdGl2ZVBhbmUgPSB0aGlzLmFjdGl2ZVBhbmUgPT09ICdsZWZ0JyA/ICdyaWdodCcgOiAnbGVmdCc7XG59XG4gIG9uU2VsZWN0aW9uKGNvbXBhbnk6IGFueSkge1xuICAgIHRoaXMuc2xpZGVWaWV3cygpO1xuICAgIHRoaXMuaXNDb21wYW55U2VsZWN0ZWQgPSB0cnVlXG4gICAgdGhpcy5zZWxlY3RlZENvbXBhbnkgPSBjb21wYW55O1xuICAgIGNvbnNvbGUubG9nKFwic2VsZWN0ZWQgY29tcFwiK3RoaXMuc2VsZWN0ZWRDb21wYW55KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2NvbXBTZXJ2aWNlLmdldENvbXBhbmllcygpXG4gICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICAgIHRoaXMuY29tcGFuaWVzID0gcmVzdWx0O1xuICAgICAgfSk7XG4gICAgY29uc29sZS5sb2coXCJjb21wIGxpc3QgbmdPbmluaXRcIik7XG4gIH1cblxuICBvblJldHVyblRvTGlzdChjb3VudCkge1xuICAgIHRoaXMuc2xpZGVWaWV3cygpO1xuICAgIGNvbnNvbGUubG9nKGNvdW50KTtcbiAgICB0aGlzLmlzQ29tcGFueVNlbGVjdGVkID0gZmFsc2U7XG4gIH1cbn0iXX0=