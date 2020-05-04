import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { Observable, Subscription } from 'rxjs';
import { Note } from '../../../models/note.model';

@Component({
  selector: 'app-note-list-item',
  templateUrl: './note-list-item.component.html',
  styleUrls: ['./note-list-item.component.scss']
})
export class NoteListItemComponent implements OnInit {
  @Input() note: Note;
  delta: string;

  constructor() { }

  ngOnInit(): void {
    this.delta = JSON.parse(this.note.content);
  }

}
