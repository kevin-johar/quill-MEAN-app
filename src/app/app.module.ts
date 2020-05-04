import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HeaderComponent } from './components/header/header.component';
import { NotesListComponent } from './components/notes/notes-list/notes-list.component';
import { NoteCreateComponent } from './components/notes/note-create/note-create.component';
import { NoteListItemComponent } from './components/notes/note-list-item/note-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotesListComponent,
    NoteCreateComponent,
    NoteListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
