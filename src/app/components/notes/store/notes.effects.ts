import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NoteService } from '../../../services/note.service';
import * as NotesActions from './note.actions';
import { concatMap, map } from 'rxjs/operators';

@Injectable()
export class NotesEffects {
  constructor(private action$: Actions,
              private notesService: NoteService) {}

  loadNotes$ = createEffect(() => this.action$
    .pipe(
      ofType(NotesActions.loadAllNotes),
      concatMap(action => this.notesService.getNotes()),
      map(notes => NotesActions.allNotesLoaded({notes}))
    ));
}
