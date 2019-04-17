import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { CompanyService } from '../services/company.service';
import { Company } from '../models/company';

type PaneType = 'left' | 'right';

@Component({
  selector: 'company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
  animations: [
    trigger('slide', [
      state('left', style({ transform: 'translateX(0)' })),
      state('right', style({ transform: 'translateX(-50%)' })),
      transition('* => *', animate(300))
    ])
  ]
})
export class CompanyListComponent {// implements OnInit {
  @Input() activePane: PaneType = 'left';

  isCompanySelected = false;
  companies = [];
  selectedCompany: any;
  backtothelist = true;
  constructor(private _compService: CompanyService) {
  }

slideViews(){  
    console.log("this.activePane: ",this.activePane)
    this.activePane = this.activePane === 'left' ? 'right' : 'left';
}
  onSelection(company: any) {
    this.slideViews();
    this.isCompanySelected = true
    this.selectedCompany = company;
    console.log("selected comp"+this.selectedCompany);
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
}