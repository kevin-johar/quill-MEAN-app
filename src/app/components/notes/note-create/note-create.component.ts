import { Component, OnInit } from '@angular/core';
declare const Quill;

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.scss']
})
export class NoteCreateComponent implements OnInit {

  quill: any;
  delta: any;

  constructor() {
  }

  ngOnInit(): void {
    // Quill configuration
    const config = {
      theme: 'snow'
    };

    // Instance of the Quill editor we just created
    this.quill = new Quill('#editor', config);

    // This is a representation of the contents in the editor.
    this.delta = this.quill.getContents();
  }

  saveNote() {
    this.delta = this.quill.getContents();
  }

}
