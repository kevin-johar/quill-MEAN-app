import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromNotes from './reducers';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromNotes.notesFeatureKey, fromNotes.reducers, {  })
  ],
  providers: [
    HttpClient
  ]
})
export class NotesModule { }
