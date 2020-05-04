import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { first, last, map, shareReplay, throttle } from 'rxjs/operators';
import { Note } from '../../../models/note.model';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class NoteService {
  private serverUrl = environment.apiUrl + '/notes';
  private notesSubject = new Subject<Note[]>();

  constructor(private http: HttpClient,
              private router: Router) {
  }

  getNotesObservable() {
    return this.notesSubject.asObservable();
  }

  getNotes() {
    this.http.get<{ message: string, notes: any }>(this.serverUrl)
      .subscribe(
        (res) => {
          console.log(res.message);

          this.notesSubject.next(res.notes);
        }
      );
  }

  postNote(title: string, content: string) {
    const note: Note = {
      id: null,
      title,
      content
    };

    this.http.post<{ message: string, note: Note }>(this.serverUrl, note)
      .subscribe(
        (res) => {
          console.log(res.message);
          this.router.navigate(['']);
        }
      );
  }
}
