import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CompanyService } from '../services/company.service';
let CompanyListComponent = class CompanyListComponent {
    constructor(_compService) {
        this._compService = _compService;
        this.activePane = 'left';
        this.isCompanySelected = false;
        this.companies = [];
        this.backtothelist = true;
    }
    slideViews() {
        console.log("this.activePane: ", this.activePane);
        this.activePane = this.activePane === 'left' ? 'right' : 'left';
    }
    onSelection(company) {
        this.slideViews();
        this.isCompanySelected = true;
        this.selectedCompany = company;
        console.log("selected comp" + this.selectedCompany);
    }
    ngOnInit() {
        this._compService.getCompanies()
            .subscribe(result => {
            this.companies = result;
        });
        console.log("comp list ngOninit");
    }
    onReturnToList(count) {
        this.slideViews();
        console.log(count);
        this.isCompanySelected = false;
    }
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
export { CompanyListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFueS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbXBhbnkvIiwic291cmNlcyI6WyJsaWIvY29tcGFueS1saXN0L2NvbXBhbnktbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUF3QixNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWpGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQWlCN0QsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFPL0IsWUFBb0IsWUFBNEI7UUFBNUIsaUJBQVksR0FBWixZQUFZLENBQWdCO1FBTnZDLGVBQVUsR0FBYSxNQUFNLENBQUM7UUFFdkMsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFFZixrQkFBYSxHQUFHLElBQUksQ0FBQztJQUVyQixDQUFDO0lBRUgsVUFBVTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ2hELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3BFLENBQUM7SUFDQyxXQUFXLENBQUMsT0FBWTtRQUN0QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQTtRQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRTthQUM3QixTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUFLO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztDQUNGLENBQUE7QUFqQ1U7SUFBUixLQUFLLEVBQUU7O3dEQUErQjtBQUQ1QixvQkFBb0I7SUFaaEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGNBQWM7UUFDeEIsMjlCQUE0QztRQUU1QyxVQUFVLEVBQUU7WUFDVixPQUFPLENBQUMsT0FBTyxFQUFFO2dCQUNmLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7Z0JBQ3BELEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztnQkFDeEQsVUFBVSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbkMsQ0FBQztTQUNIOztLQUNGLENBQUM7NkNBUWtDLGNBQWM7R0FQckMsb0JBQW9CLENBa0NoQztTQWxDWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuaW1wb3J0IHsgQ29tcGFueVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb21wYW55LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcGFueSB9IGZyb20gJy4uL21vZGVscy9jb21wYW55JztcblxudHlwZSBQYW5lVHlwZSA9ICdsZWZ0JyB8ICdyaWdodCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbXBhbnktbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wYW55LWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb21wYW55LWxpc3QuY29tcG9uZW50LmNzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignc2xpZGUnLCBbXG4gICAgICBzdGF0ZSgnbGVmdCcsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScgfSkpLFxuICAgICAgc3RhdGUoJ3JpZ2h0Jywgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJyB9KSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IConLCBhbmltYXRlKDMwMCkpXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb21wYW55TGlzdENvbXBvbmVudCB7Ly8gaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBhY3RpdmVQYW5lOiBQYW5lVHlwZSA9ICdsZWZ0JztcblxuICBpc0NvbXBhbnlTZWxlY3RlZCA9IGZhbHNlO1xuICBjb21wYW5pZXMgPSBbXTtcbiAgc2VsZWN0ZWRDb21wYW55OiBhbnk7XG4gIGJhY2t0b3RoZWxpc3QgPSB0cnVlO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb21wU2VydmljZTogQ29tcGFueVNlcnZpY2UpIHtcbiAgfVxuXG5zbGlkZVZpZXdzKCl7ICBcbiAgICBjb25zb2xlLmxvZyhcInRoaXMuYWN0aXZlUGFuZTogXCIsdGhpcy5hY3RpdmVQYW5lKVxuICAgIHRoaXMuYWN0aXZlUGFuZSA9IHRoaXMuYWN0aXZlUGFuZSA9PT0gJ2xlZnQnID8gJ3JpZ2h0JyA6ICdsZWZ0Jztcbn1cbiAgb25TZWxlY3Rpb24oY29tcGFueTogYW55KSB7XG4gICAgdGhpcy5zbGlkZVZpZXdzKCk7XG4gICAgdGhpcy5pc0NvbXBhbnlTZWxlY3RlZCA9IHRydWVcbiAgICB0aGlzLnNlbGVjdGVkQ29tcGFueSA9IGNvbXBhbnk7XG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RlZCBjb21wXCIrdGhpcy5zZWxlY3RlZENvbXBhbnkpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fY29tcFNlcnZpY2UuZ2V0Q29tcGFuaWVzKClcbiAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgICAgdGhpcy5jb21wYW5pZXMgPSByZXN1bHQ7XG4gICAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcImNvbXAgbGlzdCBuZ09uaW5pdFwiKTtcbiAgfVxuXG4gIG9uUmV0dXJuVG9MaXN0KGNvdW50KSB7XG4gICAgdGhpcy5zbGlkZVZpZXdzKCk7XG4gICAgY29uc29sZS5sb2coY291bnQpO1xuICAgIHRoaXMuaXNDb21wYW55U2VsZWN0ZWQgPSBmYWxzZTtcbiAgfVxufSJdfQ==