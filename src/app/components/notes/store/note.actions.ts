import { createAction, props } from '@ngrx/store';
import { Note } from '../../../models/note.model';

export const loadAllNotes = createAction(
  '[Notes Resolver] - Load All Notes'
);

export const allNotesLoaded = createAction(
  '[Load Notes Effect] - All Notes Loaded',
  props<{notes: Note[]}>()
);
