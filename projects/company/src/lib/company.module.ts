import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from './material.module';


import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyContainerComponent } from './company-container/company-container.component';
import { CompanySettingsComponent } from './company-settings/company-settings.component';

import { CompanyService } from './services/company.service';
import { SettingsService } from './services/settings.service';

@NgModule({
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
class CompanyModule { }

export {
  CompanyModule,
  CompanyService,
  SettingsService
}