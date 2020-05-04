import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../../../models/note.model';
import { NoteService } from '../../../services/note.service';
import { select, Store } from '@ngrx/store';
import { selectAllNotes } from '../store/notes.selectors';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  notes$: Observable<Note[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.notes$ = this.store.pipe(
      select(selectAllNotes)
    );
  }

}
