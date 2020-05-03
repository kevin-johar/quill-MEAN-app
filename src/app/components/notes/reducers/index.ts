import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { Note } from '../../../models/note.model';

export const notesFeatureKey = 'notes';

export interface NotesState {
  notes: Note[];
}

export const reducers: ActionReducerMap<NotesState> = {
  notes: undefined
};


export const metaReducers: MetaReducer<NotesState>[] = !environment.production ? [] : [];
