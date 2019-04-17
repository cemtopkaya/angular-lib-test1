import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

interface ICompanySettings {
  data: string[];
}
@Component({
  selector: 'app-company-settings',
  templateUrl: './company-settings.component.html',
  styleUrls: ['./company-settings.component.css']
})
export class CompanySettingsComponent implements OnInit {
  settings: ICompanySettings;
  constructor(private _setService: SettingsService) {}

  ngOnInit() {
    this.fetchSettings();
  }
  fetchSettings() {
    this._setService.getSettings().subscribe(result => {
      this.settings = result;
    });
    console.log('settings: ' + this.settings);
  }
}
