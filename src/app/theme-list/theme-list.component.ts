import { Component, OnInit } from '@angular/core';
import { DbService } from '../shared/db.service';
import { Theme } from '../shared/theme';
import { MatDialog } from '@angular/material/dialog';
import { ThemeChangeDetailComponent } from '../theme-change-detail/theme-change-detail.component';

@Component({
  selector: 'no-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.scss']
})
export class ThemeListComponent implements OnInit {
  themes!: Array<Theme>;

  constructor(private dbs: DbService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadThemes();
  }

  async loadThemes(): Promise<void> {
    this.themes = await this.dbs.getThemesByDescription();
  }

  openDialog(theme: Theme): void {
    this.dialog.open(ThemeChangeDetailComponent, {
      data: theme,
      position: {bottom:'15px'}
    });
  }
}
