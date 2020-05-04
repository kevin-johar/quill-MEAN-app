import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as NotesActions from '../store/note.actions';

@Component({
  selector: 'app-note-list-item',
  templateUrl: './note-list-item.component.html',
  styleUrls: ['./note-list-item.component.scss']
})
export class NoteListItemComponent implements OnInit {
  @Input() note: any;
  id: string;
  preview: string;
  delta: any;

  constructor(private store: Store,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.note.id;
    this.delta = JSON.parse(this.note.content);
    this.preview = this.delta["ops"][0].insert;
  }

  viewNote() {
    this.router.navigate(['/note/', this.id]);
  }

  editNote() {
    this.router.navigate(['/edit/', this.id]);
  }

  deleteNote() {
    this.store.dispatch(NotesActions.deleteNote({id: this.id}));
    // this.noteService.deleteNote(this.id);
  }
}
