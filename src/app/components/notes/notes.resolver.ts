import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { filter, finalize, first, tap } from 'rxjs/operators';
import * as NotesActions from './store/note.actions';
import { areNotesLoaded } from './store/notes.selectors';

@Injectable()
export class NotesResolver implements Resolve<any> {

  loading = false;

  constructor(private store: Store) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store
      .pipe(
        select(areNotesLoaded),
        tap(notesLoaded => {
          if (!this.loading && !notesLoaded) {
            this.loading = true;
            this.store.dispatch(NotesActions.loadAllNotes());
          }
        }),
        filter(notesLoaded => notesLoaded),
        first(),
        finalize(() => this.loading = false)
      );
  }

}
