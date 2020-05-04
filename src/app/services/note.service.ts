import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { first, last, map, shareReplay, throttle } from 'rxjs/operators';
import { Note } from '../models/note.model';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class NoteService {
  private serverUrl = environment.apiUrl + '/notes/';
  private notesSubject = new Subject<Note[]>();

  notes: Note[];

  constructor(private http: HttpClient,
              private router: Router) {
  }

  getNotesObservable() {
    return this.notesSubject.asObservable();
  }

  getNote(id: string) {
    return this.http.get<{ message: string, note: any }>(this.serverUrl + id)
      .pipe(
        map(res => res.note)
      );
  }

  getNotes() {
    return this.http.get<{ message: string, notes: any }>(this.serverUrl)
      .pipe(
        map(res => res.notes)
      );
  }

  updateNote(note: Note) {
    const id = note.id;

    this.http.put<{ message: string, note: Note }>(this.serverUrl + id, note)
      .subscribe((res) => {
        // console.log(res.message);

        this.router.navigate(['']);
      });
  }

  postNote(note: Note) {
    this.http.post<{ message: string, note: Note }>(this.serverUrl, note)
      .subscribe(
        (res) => {
          // console.log(res.message);

          this.router.navigate(['']);
        }
      );
  }

  deleteNote(id: string) {
    this.http.delete<{ message: string }>(this.serverUrl + id)
      .subscribe(
        (res) => {
          // console.log(res.message);

          this.notes = this.notes.filter(note => note.id !== id);
          this.notesSubject.next(this.notes);
        }
      );
  }
}
