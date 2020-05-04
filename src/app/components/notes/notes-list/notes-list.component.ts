import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../../../models/note.model';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  notes$: Observable<Note[]>;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.getNotes();
    this.notes$ = this.noteService.getNotesObservable();
  }

}
