import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NoteService } from '../../../services/note.service';
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.scss']
})
export class NoteViewComponent implements OnInit {

  id: string;
  title: string;
  delta: any;
  html: any;

  constructor(private activatedRoute: ActivatedRoute,
              private noteService: NoteService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');

      this.noteService.getNote(this.id)
        .subscribe(note => {
          this.title = note.title;
          this.delta = JSON.parse(note.content)["ops"];

          let converter = new QuillDeltaToHtmlConverter(this.delta, {});
          this.html = converter.convert();
        });
    });
  }

}
