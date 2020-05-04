import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../../services/note.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Note } from '../../../models/note.model';
import { Store } from '@ngrx/store';
import * as NotesActions from '../store/note.actions';
import { Update } from '@ngrx/entity';

declare const Quill;

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.scss']
})
export class NoteEditorComponent implements OnInit {

  mode = 'create';
  id: string;
  note: Note;
  quill: any;
  delta: any;
  title: string;

  noteForm: FormGroup;

  constructor(private noteService: NoteService,
              private store: Store,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // Quill configuration
    const config = {
      theme: 'snow'
    };

    // Instance of the Quill editor we just created
    this.quill = new Quill('#editor', config);

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.mode = 'edit';
        this.id = paramMap.get('id');

        this.noteService.getNote(this.id)
          .subscribe(note => {
            this.title = note.title;
            this.delta = JSON.parse(note.content);

            this.noteForm.controls.title.setValue(this.title);

            this.quill.setContents(this.delta);
          });
      } else {
        this.mode = 'create';
        this.id = null;
      }
    });

    // Reactive form
    this.noteForm = new FormGroup({
      title: new FormControl(this.title, [Validators.required])
    });
  }

  saveNote() {
    // Check validity of form
    if (this.noteForm.valid) {
      const content = JSON.stringify(this.quill.getContents());
      const title = this.noteForm.value.title;

      const note = {
        id: this.id,
        title,
        content
      };

      // Check mode
      if (this.mode === 'create') {
        this.store.dispatch(NotesActions.postNote({note}));
      } else if (this.mode === 'edit') {
        const update: Update<Note> = {
          id: note.id,
          changes: note
        };

        this.store.dispatch(NotesActions.updateNote({update}));
      }
    } else {
      console.error('Form is invalid!');
      return;
    }
  }
}
