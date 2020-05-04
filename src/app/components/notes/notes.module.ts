import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromNotes from './reducers';
import { HttpClient } from '@angular/common/http';
import { NoteViewComponent } from './note-view/note-view.component';



@NgModule({
  declarations: [NoteViewComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromNotes.notesFeatureKey, fromNotes.reducers, {  })
  ],
  providers: [
    HttpClient
  ]
})
export class NotesModule { }
