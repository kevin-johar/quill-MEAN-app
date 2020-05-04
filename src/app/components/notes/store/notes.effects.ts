import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NoteService } from '../../../services/note.service';
import * as NotesActions from './note.actions';
import { concatMap, map, tap } from 'rxjs/operators';

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

  updateNote$ = createEffect(() => this.action$
    .pipe(
      ofType(NotesActions.updateNote),
      concatMap((action) => this.notesService.updateNote(action.update.changes))
    ), { dispatch: false });

  postNote$ = createEffect(() => this.action$
    .pipe(
      ofType(NotesActions.postNote),
      concatMap((action) => this.notesService.postNote(action.note)),
      map((note) => NotesActions.postNoteCompleted({note}))
    ));

  deleteNote$ = createEffect(() => this.action$
    .pipe(
      ofType(NotesActions.deleteNote),
      tap((action) => this.notesService.deleteNote(action.id))
    ), { dispatch: false });
}
