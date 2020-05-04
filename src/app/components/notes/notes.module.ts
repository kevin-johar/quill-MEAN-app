import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromNotes from './reducers';
import { HttpClient } from '@angular/common/http';
import { NoteViewComponent } from './note-view/note-view.component';
import { NotesResolver } from './notes.resolver';
import { EffectsModule } from '@ngrx/effects';
import { NotesEffects } from './store/notes.effects';



@NgModule({
  declarations: [NoteViewComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromNotes.notesFeatureKey, fromNotes.NotesReducer, {  }),
    EffectsModule.forFeature([NotesEffects])
  ],
  providers: [
    HttpClient,
    NotesResolver
  ]
})
export class NotesModule { }
