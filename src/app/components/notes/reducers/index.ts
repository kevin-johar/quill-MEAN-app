import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';

export const notesFeatureKey = 'notes';

export interface NotesState {
  notes
}

export const reducers: ActionReducerMap<NotesState> = {

};


export const metaReducers: MetaReducer<NotesState>[] = !environment.production ? [] : [];
