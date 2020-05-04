import { createReducer, on } from '@ngrx/store';
import { Note } from '../../../models/note.model';
import * as NotesActions from '../store/note.actions';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

export const notesFeatureKey = 'notes';

export interface NotesState extends EntityState<Note> {
  notesLoaded: boolean;
}

export const adapter = createEntityAdapter<Note>();

export const initialNotesState = adapter.getInitialState({
  notesLoaded: false
});

export const NotesReducer = createReducer(
  initialNotesState,
  on(
    NotesActions.allNotesLoaded,
    (state, action) => adapter.setAll(
      action.notes,
      {...state, notesLoaded: true}
    )
  ),
  on(
    NotesActions.deleteNote,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(
    NotesActions.updateNote,
    (state, action) => adapter.updateOne(action.update, state)
  ),
  on(
    NotesActions.postNoteCompleted,
    (state, action) => adapter.addOne(action.note, state)
  )
);

export const {selectAll} = adapter.getSelectors();
