import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from './material.module';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyContainerComponent } from './company-container/company-container.component';
import { CompanySettingsComponent } from './company-settings/company-settings.component';
import { CompanyService } from './services/company.service';
import { SettingsService } from './services/settings.service';
var CompanyModule = /** @class */ (function () {
    function CompanyModule() {
    }
    CompanyModule = tslib_1.__decorate([
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
export { CompanyModule, CompanyService, SettingsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFueS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb21wYW55LyIsInNvdXJjZXMiOlsibGliL2NvbXBhbnkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUd2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUM1RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUV6RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBd0I5RDtJQUFBO0lBQXNCLENBQUM7SUFBakIsYUFBYTtRQXRCbEIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osa0JBQWtCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHlCQUF5QjthQUMxQjtZQUNELFNBQVMsRUFBRTtnQkFDVCx5QkFBeUI7YUFDMUI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osb0JBQW9CO2dCQUNwQix1QkFBdUI7Z0JBQ3ZCLHlCQUF5QjtnQkFDekIsd0JBQXdCO2FBQ3pCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULGNBQWM7Z0JBQ2QsZUFBZTthQUNoQjtTQUNGLENBQUM7T0FDSSxhQUFhLENBQUk7SUFBRCxvQkFBQztDQUFBLEFBQXZCLElBQXVCO0FBRXZCLE9BQU8sRUFDTCxhQUFhLEVBQ2IsY0FBYyxFQUNkLGVBQWUsRUFDaEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGVtb01hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi9tYXRlcmlhbC5tb2R1bGUnO1xuXG5cbmltcG9ydCB7IENvbXBhbnlMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wYW55LWxpc3QvY29tcGFueS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wYW55RGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcGFueS1kZXRhaWxzL2NvbXBhbnktZGV0YWlscy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcGFueUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY29tcGFueS1jb250YWluZXIvY29tcGFueS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBhbnlTZXR0aW5nc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcGFueS1zZXR0aW5ncy9jb21wYW55LXNldHRpbmdzLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENvbXBhbnlTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb21wYW55LnNlcnZpY2UnO1xuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zZXR0aW5ncy5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBEZW1vTWF0ZXJpYWxNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENvbXBhbnlDb250YWluZXJDb21wb25lbnQsXG4gIF0sXG4gIGJvb3RzdHJhcDogW1xuICAgIENvbXBhbnlDb250YWluZXJDb21wb25lbnRcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ29tcGFueUxpc3RDb21wb25lbnQsXG4gICAgQ29tcGFueURldGFpbHNDb21wb25lbnQsXG4gICAgQ29tcGFueUNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBDb21wYW55U2V0dGluZ3NDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ29tcGFueVNlcnZpY2UsXG4gICAgU2V0dGluZ3NTZXJ2aWNlXG4gIF1cbn0pXG5jbGFzcyBDb21wYW55TW9kdWxlIHsgfVxuXG5leHBvcnQge1xuICBDb21wYW55TW9kdWxlLFxuICBDb21wYW55U2VydmljZSxcbiAgU2V0dGluZ3NTZXJ2aWNlXG59Il19