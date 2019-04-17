import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let CompanyContainerComponent = class CompanyContainerComponent {
    constructor() {
        this.flipped = false;
    }
    ngOnInit() {
    }
    flipIt() {
        this.flipped = !this.flipped;
    }
};
CompanyContainerComponent = tslib_1.__decorate([
    Component({
        selector: 'app-company-container',
        template: "<mat-card class=\"mat-elevation-z1 scene\">\n\t<mat-card-title>\n\t\t<button mat-icon-button (click)=\"flipIt()\">\n      <mat-icon>settings</mat-icon>\n    </button>\n  </mat-card-title>\n  <mat-card-content class=\"card\" [class.voted]=\"flipped\">\n      <mat-card class=\"card__face card__face--front\">\n       <company-list></company-list>\n      </mat-card>\n      <mat-card class=\"card__face card__face--back\">\n          <app-company-settings></app-company-settings>\n      </mat-card>\n  </mat-card-content>\n</mat-card>",
        styles: [".scene{-webkit-perspective:600px;perspective:600px;overflow:visible;margin:5% auto}.card{width:100%;height:100%;padding:2%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;transition:.6s;z-index:200}.card__face{width:90%;height:100%;background-color:#add8e6;-webkit-backface-visibility:hidden;backface-visibility:hidden;position:relative;overflow:hidden}.card__face--back{position:absolute;top:0;-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.card.voted{transform:rotateY(180deg);-webkit-transform:rotateY(180deg)}mat-card:not([class*=mat-elevation-z]){box-shadow:none!important}"]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], CompanyContainerComponent);
export { CompanyContainerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFueS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tcGFueS8iLCJzb3VyY2VzIjpbImxpYi9jb21wYW55LWNvbnRhaW5lci9jb21wYW55LWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFPbEQsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBeUI7SUFFcEM7UUFJQSxZQUFPLEdBQUcsS0FBSyxDQUFDO0lBSkEsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUMvQixDQUFDO0NBQ0YsQ0FBQTtBQVZZLHlCQUF5QjtJQUxyQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsdUJBQXVCO1FBQ2pDLGdpQkFBaUQ7O0tBRWxELENBQUM7O0dBQ1cseUJBQXlCLENBVXJDO1NBVlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWNvbXBhbnktY29udGFpbmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBhbnktY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29tcGFueS1jb250YWluZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbXBhbnlDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbiAgZmxpcHBlZCA9IGZhbHNlO1xuICBmbGlwSXQoKSB7XG4gICAgdGhpcy5mbGlwcGVkID0gIXRoaXMuZmxpcHBlZDtcbiAgfVxufSJdfQ==