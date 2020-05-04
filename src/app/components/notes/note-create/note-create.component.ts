import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { HttpEvent } from '@angular/common/http';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
declare const Quill;

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.scss']
})
export class NoteCreateComponent implements OnInit {

  quill: any;
  delta: any;
  title: string;
  noteForm: FormGroup;

  constructor(private noteService: NoteService) {
  }

  ngOnInit(): void {
    // Quill configuration
    const config = {
      theme: 'snow'
    };

    // Instance of the Quill editor we just created
    this.quill = new Quill('#editor', config);

    this.noteForm = new FormGroup({
      title: new FormControl(this.title, [Validators.required])
    });
  }

  saveNote() {
    if (this.noteForm.valid) {
      const delta = JSON.stringify(this.quill.getContents());
      const title = this.noteForm.value.title;

      this.noteService.postNote(title, delta);
    } else {
      console.error('Form is invalid!');
      return;
    }
  }

}
