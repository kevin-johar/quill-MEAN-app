import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from '../../../services/note.service';
import { Observable, Subscription } from 'rxjs';
import { Note } from '../../../models/note.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-list-item',
  templateUrl: './note-list-item.component.html',
  styleUrls: ['./note-list-item.component.scss']
})
export class NoteListItemComponent implements OnInit {
  @Input() note: any;
  id: any;
  preview: string;
  delta: any;

  constructor(private noteService: NoteService,
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
    this.noteService.deleteNote(this.id);
  }
}
