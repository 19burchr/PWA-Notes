import { Component, OnInit } from '@angular/core';
import { DbService } from '../shared/db.service';
import { Note } from '../shared/note';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'no-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  allNotes!: Array<Note>;
  notes!: Array<Note>;
  sortOrder: string = '';

  constructor(private dbs: DbService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.dbs.getNotesByTheme()
      .then(notes => this.allNotes = notes)
  }

  openSnackBar(message: string) {
    this._snackBar.open(message);
  }

  chipSelection(chip: string): void {
    this.sortOrder = chip;
    this.loadNotes();
  }

  async loadNotes(): Promise<void> {
    this.allNotes = await this.dbs.getNotesByTheme();
    console.log(this.allNotes);
    this.notes = this.allNotes.slice();
  }
}
