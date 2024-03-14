import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NoteListComponent } from './note-list/note-list.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { FormComponent } from './form/form.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { ThemeChangeDetailComponent } from './theme-change-detail/theme-change-detail.component';
import { ThemeNewDetailComponent } from './theme-new-detail/theme-new-detail.component';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NoteListComponent,
    ThemeListComponent,
    FormComponent,
    ThemeChangeDetailComponent,
    ThemeNewDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    MatChipsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    FlexLayoutModule,
    MatDialogModule,
    MatRippleModule
  ],
  providers: [{
    provide: ErrorStateMatcher,
    useClass: ShowOnDirtyErrorStateMatcher
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
