import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Theme } from '../shared/theme';

@Component({
  selector: 'no-theme-new-detail',
  templateUrl: './theme-new-detail.component.html',
  styleUrls: ['./theme-new-detail.component.scss']
})
export class ThemeNewDetailComponent {
  descriptionExists: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Theme) { }
}
