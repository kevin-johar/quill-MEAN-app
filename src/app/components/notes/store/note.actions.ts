import { createAction, props } from '@ngrx/store';
import { Note } from '../../../models/note.model';
import { Update } from '@ngrx/entity';

export const loadAllNotes = createAction(
  '[Notes Resolver] - Load All Notes'
);

export const allNotesLoaded = createAction(
  '[Load Notes Effect] - All Notes Loaded',
  props<{notes: Note[]}>()
);

export const updateNote = createAction(
  '[Note Editor] - Update Note',
  props<{update: Update<Note>}>()
);

export const postNote = createAction(
  '[Note Editor] - Post Note',
  props<{note: Note}>()
);
export const postNoteCompleted = createAction(
  '[Note Editor] - Post Note Completed',
  props<{note: Note}>()
);

export const deleteNote = createAction(
  '[Notes Page] - Delete Note',
  props<{id: string}>()
);
