import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { Company } from '../models/company';

@Component({
  selector: 'company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent {
  company: Company;
  isCompanySelected = false;
  //animation
  display_loading = 'block';
  display_view = 'none';
  @Output() returnToList = new EventEmitter();
  returnBackToList() {
       //animation
    this.display_view = 'none';
    this.returnToList.emit(null);
  }

  constructor(private _companyService: CompanyService) { }
  private _companyId = 0;
  get companyId(): number { return this._companyId; }
  @Input('companyId')
  set companyId(value: number) {
     //animation
    this.display_loading = 'block';
    this.display_view = 'none';

    this._companyId = +value;
    this._companyService.getCompany(this.companyId)
      .subscribe((c: Company[]) => {
        this.isCompanySelected = true;
         //animation
        this.display_loading = 'none';
        this.display_view = 'block';

        this.company = c.find(a => a.id == this._companyId);
      })
  }
}

