import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from '../shared/note';
import { DbService } from '../shared/db.service';
import { Theme } from '../shared/theme';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ThemeNewDetailComponent } from '../theme-new-detail/theme-new-detail.component';
import { User } from '../shared/user';

@Component({
  selector: 'no-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  themes!: Array<Theme>;
  creationDate!: number;
  modificationDate!: number;
  editBoolean: boolean = false;

  constructor(private fb: FormBuilder, private dbs: DbService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private dialog: MatDialog) { this.createForm(Note.empty()); }

  ngOnInit(): void {
    this.dbs.getThemesByDescription()
      .then(themes => this.themes = themes)

    this.route.params.subscribe(async params => {
      const id = params['id'];
      if (id) {
        this.editBoolean = true;
        try {
          const note = await this.dbs.getNote(id);
          this.createForm(note);
        } catch (error) {
          this.openSnackBar('Fehler beim Laden des Artikels');
        }
      } else {
        this.editBoolean = false;
        this.createForm(Note.empty());
      }
    });
  }

  createForm(note: Note) {
    this.creationDate = note.creationDate;
    this.modificationDate = note.modificationDate;
    this.form = this.fb.group({
      title: [note.title, {
        validators: Validators.required
      }],
      theme: [note.theme?.id, {
        validators: Validators.required
      }],
      text: [note.text, {
        validators: Validators.required
      }]
    });
  }

  backToList() {
    this.router.navigate(['/noteList']);
  }

  async add() {
    const note: Note = Note.empty();
    Object.assign(note, this.form.value);
    note.user = User.emptySepp();
    await this.dbs.addNote(note)
      .then(result => console.log('Erfolgreich hinzugefügt'))
      .catch(error => this.openSnackBar('Fehler beim Hinzufügen der Notiz'))
      .finally(() => this.form.reset(Note.empty()));
    this.backToList();
  }

  async edit() {
    const note: Note = Note.empty();
    Object.assign(note, this.form.value);
    await this.dbs.updateNote(note)
      .then(result => console.log('Erfolgreich geändert'))
      .catch(error => this.openSnackBar('Fehler beim Ändern der Notiz'));
    this.createForm(note);
    this.backToList();
  }

  async delete() {
    const note: Note = Note.empty();
    Object.assign(note, this.form.value);
    await this.dbs.deleteNote(note.id)
      .catch(error => this.openSnackBar('Fehler beim Löschen der Notiz'));
    this.form.reset(Note.empty());
    this.backToList();
  }

  private openSnackBar(msg: string) {
    this.snackBar.open(msg, 'OK', {
      duration: 5000,
    });
  }

  openDialog(): void {
    this.dialog.open(ThemeNewDetailComponent, {
      position: { bottom: '15px' }
    });
  }
}
