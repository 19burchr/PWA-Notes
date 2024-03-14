import { Component, OnInit } from '@angular/core';
import { DbService } from '../shared/db.service';
import { Note } from '../shared/note';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'no-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  allNotes!: Array<Note>;
  notes!: Array<Note>;
  sortOrder: string = 'Titel';

  constructor(private dbs: DbService, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.loadNotes();
  }

  private openSnackBar(message: string) {
    this._snackBar.open(message);
  }

  async chipSelection(chip: string): Promise<void> {
    if (this.sortOrder === chip) {
      this.notes = [];
      this.sortOrder = ''
      await this.loadNotes();
    } else {
      this.sortOrder = chip;
      await this.loadNotes();
    }
  }

  async loadNotes(): Promise<void> {
    this.allNotes = await this.dbs.getNotesByTheme();
    await this.sortNotes();
  }

  async sortNotes(): Promise<void> {
    if (this.sortOrder === 'Titel') {
      this.notes = this.allNotes.slice().sort((note1, note2) => note1.title.localeCompare(note2.title));
    } else if (this.sortOrder === 'Thema') {
      this.notes = this.allNotes.slice().sort((note1, note2) => {
        if (note1.theme && note2.theme) {
          return note1.theme.description.localeCompare(note2.theme.description);
        }
        return 0;
      });
    } else if (this.sortOrder === 'Änderungsdatum') {
      this.notes = this.allNotes.slice().sort((note1, note2) => note1.modificationDate - note2.modificationDate);
    } else {
      this.openSnackBar('Keine Sortierreihenfolge ausgewählt');
    }
  }

  openForm(noteId: string): void {
    this.router.navigate(['/editForm', noteId]);
  }
}
