import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteListComponent } from './note-list/note-list.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', component: NoteListComponent, pathMatch: 'full' },
  { path: 'noteList', component: NoteListComponent },
  { path: 'themeList', component: ThemeListComponent },
  { path: 'form', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
