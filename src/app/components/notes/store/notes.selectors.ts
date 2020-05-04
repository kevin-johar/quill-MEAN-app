import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NotesState } from '../reducers';
import * as fromNotes from '../reducers/index';

export const selectNotesState = createFeatureSelector<NotesState>('notes');

export const selectAllNotes = createSelector(
  selectNotesState,
  fromNotes.selectAll
);

export const areNotesLoaded = createSelector(
  selectNotesState,
  state => state.notesLoaded
);
