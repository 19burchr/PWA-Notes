import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Theme } from '../shared/theme';

@Component({
  selector: 'no-theme-change-detail',
  templateUrl: './theme-change-detail.component.html',
  styleUrls: ['./theme-change-detail.component.scss']
})
export class ThemeChangeDetailComponent {
  descriptionExists: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Theme) { }
}
