import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { delay } from 'rxjs/operators';
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
    CompanyService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CompanyService);
    return CompanyService;
}());
export { CompanyService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFueS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tcGFueS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb21wYW55LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBa0IsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBNEIsS0FBSyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFJNUU7SUFFRSx3QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQURwQyxhQUFRLEdBQUcsa0JBQWtCLENBQUM7SUFDUyxDQUFDO0lBRXhDLG1DQUFVLEdBQVYsVUFBVyxFQUFVO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsd0NBQWUsR0FBZixVQUFnQixFQUFVO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDdEUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNULENBQUM7SUFDSixDQUFDO0lBRUQseUNBQWdCLEdBQWhCLFVBQWlCLEVBQVU7UUFDekIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLHVCQUF1QixDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELHFDQUFZLEdBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQXJCVSxjQUFjO1FBRDFCLFVBQVUsRUFBRTtpREFHZSxVQUFVO09BRnpCLGNBQWMsQ0FzQjFCO0lBQUQscUJBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQXRCWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIGZyb20gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbmQsIGZpcnN0LCBmaWx0ZXIsIG1hcCwgZGVsYXksIGNvbmNhdE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbXBhbnkgfSBmcm9tICcuLi9tb2RlbHMvY29tcGFueSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wYW55U2VydmljZSB7XG4gIHJvb3RQYXRoID0gJy4uLy4uLy4uLy4uL3NyYy8nO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgZ2V0Q29tcGFueShpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxDb21wYW55W10+IHtcbiAgICBjb25zb2xlLmxvZygnZ2VsZW4gaWQ6JywgaWQpO1xuICAgIHJldHVybiB0aGlzLnRlbXBfZ2V0Q29tcGFueShpZCk7XG4gIH1cblxuICB0ZW1wX2dldENvbXBhbnkoaWQ6IG51bWJlcik6IGFueSB7XG4gICAgcmV0dXJuIGZyb20odGhpcy5odHRwLmdldCh0aGlzLnJvb3RQYXRoICsgJ2Fzc2V0cy9jb21wYW5pZXMuanNvbicpKS5waXBlKFxuICAgICAgZGVsYXkoMSlcbiAgICApO1xuICB9XG5cbiAgdGVtcF9nZXRDb21wYW55MShpZDogbnVtYmVyKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnJvb3RQYXRoICsgJ2Fzc2V0cy9jb21wYW5pZXMuanNvbicpO1xuICB9XG5cbiAgZ2V0Q29tcGFuaWVzKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJy4uLy4uL2Fzc2V0cy9jb21wYW5pZXMuanNvbicpO1xuICB9XG59XG4iXX0=