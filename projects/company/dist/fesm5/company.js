import { __decorate, __metadata } from 'tslib';
import { NgModule, Injectable, Input, Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatStepperModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { delay } from 'rxjs/operators';

var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = __decorate([
        NgModule({
            exports: [
                A11yModule,
                CdkStepperModule,
                CdkTableModule,
                CdkTreeModule,
                DragDropModule,
                MatAutocompleteModule,
                MatBadgeModule,
                MatBottomSheetModule,
                MatButtonModule,
                MatButtonToggleModule,
                MatCardModule,
                MatCheckboxModule,
                MatChipsModule,
                MatStepperModule,
                MatDatepickerModule,
                MatDialogModule,
                MatDividerModule,
                MatExpansionModule,
                MatGridListModule,
                MatIconModule,
                MatInputModule,
                MatListModule,
                MatMenuModule,
                MatNativeDateModule,
                MatPaginatorModule,
                MatProgressBarModule,
                MatProgressSpinnerModule,
                MatRadioModule,
                MatRippleModule,
                MatSelectModule,
                MatSidenavModule,
                MatSliderModule,
                MatSlideToggleModule,
                MatSnackBarModule,
                MatSortModule,
                MatTableModule,
                MatTabsModule,
                MatToolbarModule,
                MatTooltipModule,
                MatTreeModule,
                ScrollingModule,
            ]
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());
/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */

var CompanyService = /** @class */ (function () {
    function CompanyService(http) {
        this.http = http;
        this.rootPath = '../../../../src/';
    }
    CompanyService.prototype.getCompany = function (id) {
        console.log('gelen id:', id);
        return this.temp_getCompany(id);
    };
    CompanyService.prototype.temp_getCompany = function (id) {
        return from(this.http.get(this.rootPath + 'assets/companies.json')).pipe(delay(1));
    };
    CompanyService.prototype.temp_getCompany1 = function (id) {
        return this.http.get(this.rootPath + 'assets/companies.json');
    };
    CompanyService.prototype.getCompanies = function () {
        return this.http.get('../../assets/companies.json');
    };
    CompanyService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], CompanyService);
    return CompanyService;
}());

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
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CompanyListComponent.prototype, "activePane", void 0);
    CompanyListComponent = __decorate([
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
        __metadata("design:paramtypes", [CompanyService])
    ], CompanyListComponent);
    return CompanyListComponent;
}());

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
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CompanyDetailsComponent.prototype, "returnToList", void 0);
    __decorate([
        Input('companyId'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], CompanyDetailsComponent.prototype, "companyId", null);
    CompanyDetailsComponent = __decorate([
        Component({
            selector: 'company-details',
            template: "<div id=\"header\" *ngIf=\"isCompanySelected\">\n\t<button\n      (click)=\"returnBackToList()\"\n        mat-icon-button >\n        <mat-icon >arrow_back_ios</mat-icon>\n      </button>\n      <span class=\"back-header\">Firma Detaylar\u0131</span>\n</div>\n<div id=\"content\">\n  <mat-card class=\"mat-elevation-z1\">\n    <mat-card-title>\n      Genel Bilgiler\n    </mat-card-title>\n    <mat-card-content [style.display]=\"display_loading\">\n      <img src=\"https://loading.io/spinners/ellipsis/lg.discuss-ellipsis-preloader.gif\" height=\"60\" >\n    </mat-card-content> \n    <mat-card-content  [style.display]=\"display_view\">      \n      <h4>Firma Ad\u0131 : {{company?.name}}</h4>\n      <h4>Adres :\t{{company?.address}} </h4>\n    </mat-card-content>\n  </mat-card>\n  <mat-card class=\"mat-elevation-z1\">\n    <mat-card-title>\n      Firma Kullan\u0131c\u0131lar\u0131\n    </mat-card-title>\n    <mat-card-content>\n      <table mat-table  [dataSource]=\"company?.users\" class=\"mat-elevation-z0\">\n          <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef> \u0130sim </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n          </ng-container>\n          <ng-container matColumnDef=\"surname\">\n            <th mat-header-cell *matHeaderCellDef> Soyisim </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.surname}} </td>\n          </ng-container>\n          <ng-container matColumnDef=\"phonenumber\">\n            <th mat-header-cell *matHeaderCellDef> Telefon No. </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.phonenumber}} </td>\n          </ng-container>\n          <ng-container matColumnDef=\"mail\">\n            <th mat-header-cell *matHeaderCellDef>E-Mail </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.mail}} </td>\n          </ng-container>\n        <tr mat-header-row *matHeaderRowDef=\"['name', 'surname','phonenumber','mail']\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: ['name', 'surname','phonenumber','mail']\"></tr>\n      </table>\n    </mat-card-content>\n  </mat-card>\n</div>",
            styles: [":host{font-family:\"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif'\"}table{width:100%}mat-card{margin-top:10px}mat-card-title{border-bottom:1px solid gray;padding-bottom:5px;display:flex;flex:1 0 0}.back-header{margin:auto 1px;font-size:180%;font-family:serif}#header{display:flex}mat-card:not([class*=mat-elevation-z]){box-shadow:none!important}"]
        }),
        __metadata("design:paramtypes", [CompanyService])
    ], CompanyDetailsComponent);
    return CompanyDetailsComponent;
}());

var CompanyContainerComponent = /** @class */ (function () {
    function CompanyContainerComponent() {
        this.flipped = false;
    }
    CompanyContainerComponent.prototype.ngOnInit = function () {
    };
    CompanyContainerComponent.prototype.flipIt = function () {
        this.flipped = !this.flipped;
    };
    CompanyContainerComponent = __decorate([
        Component({
            selector: 'app-company-container',
            template: "<mat-card class=\"mat-elevation-z1 scene\">\n\t<mat-card-title>\n\t\t<button mat-icon-button (click)=\"flipIt()\">\n      <mat-icon>settings</mat-icon>\n    </button>\n  </mat-card-title>\n  <mat-card-content class=\"card\" [class.voted]=\"flipped\">\n      <mat-card class=\"card__face card__face--front\">\n       <company-list></company-list>\n      </mat-card>\n      <mat-card class=\"card__face card__face--back\">\n          <app-company-settings></app-company-settings>\n      </mat-card>\n  </mat-card-content>\n</mat-card>",
            styles: [".scene{-webkit-perspective:600px;perspective:600px;overflow:visible;margin:5% auto}.card{width:100%;height:100%;padding:2%;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;transition:.6s;z-index:200}.card__face{width:90%;height:100%;background-color:#add8e6;-webkit-backface-visibility:hidden;backface-visibility:hidden;position:relative;overflow:hidden}.card__face--back{position:absolute;top:0;-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.card.voted{transform:rotateY(180deg);-webkit-transform:rotateY(180deg)}mat-card:not([class*=mat-elevation-z]){box-shadow:none!important}"]
        }),
        __metadata("design:paramtypes", [])
    ], CompanyContainerComponent);
    return CompanyContainerComponent;
}());

var SettingsService = /** @class */ (function () {
    function SettingsService(http) {
        this.http = http;
    }
    SettingsService.prototype.getSettings = function () {
        return this.http.get("../../assets/settings.json");
    };
    SettingsService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], SettingsService);
    return SettingsService;
}());

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
    CompanySettingsComponent = __decorate([
        Component({
            selector: 'app-company-settings',
            template: "  <mat-card-title>\n\t\tListe Ayarlar\u0131\n\t</mat-card-title>\n\t<mat-card-content>\n     <div>\n          <h3 class=\"card-row\">Birinci S\u00FCtun Bilgisi : </h3>\n          <select name=\"\" id=\"\">\n              <option  *ngFor=\"let s of settings.data\" >{{s}}</option>\n          </select>\n      </div>\n       <div>\n          <h3 class=\"card-row\">\u0130kinci S\u00FCtun Bilgisi : </h3>\n          <select name=\"\" id=\"\">\n              <option  *ngFor=\"let s of settings.data\" >{{s}}</option>\n          </select>\n      </div>\n       <div>\n          <h3 class=\"card-row\">\u00DC\u00E7\u00FCnc\u00FC S\u00FCtun Bilgisi : </h3>\n          <select name=\"\" id=\"\">\n              <option  *ngFor=\"let s of settings.data\" >{{s}}</option>\n          </select>\n      </div>\n      <div style=\"text-align:right;\"> \n        <button mat-stroked-button style=\"background-color:#fff\">Kaydet</button>\n      </div>\n   </mat-card-content>\n",
            styles: [":host{width:100%;height:100%}mat-card-title{border-bottom:1px solid gray;padding-bottom:5px;display:flex;flex:1 0 0}.card-row{display:inline-table;margin:2%}"]
        }),
        __metadata("design:paramtypes", [SettingsService])
    ], CompanySettingsComponent);
    return CompanySettingsComponent;
}());

var CompanyModule = /** @class */ (function () {
    function CompanyModule() {
    }
    CompanyModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                DemoMaterialModule
            ],
            exports: [
                CompanyContainerComponent,
            ],
            bootstrap: [
                CompanyContainerComponent
            ],
            declarations: [
                CompanyListComponent,
                CompanyDetailsComponent,
                CompanyContainerComponent,
                CompanySettingsComponent
            ],
            providers: [
                CompanyService,
                SettingsService
            ]
        })
    ], CompanyModule);
    return CompanyModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { CompanyModule, CompanyService, SettingsService };
//# sourceMappingURL=company.js.map
