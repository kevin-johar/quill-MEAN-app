import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { first, last, map, shareReplay, tap, throttle } from 'rxjs/operators';
import { Note } from '../models/note.model';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class NoteService {
  private serverUrl = environment.apiUrl + '/notes/';

  constructor(private http: HttpClient,
              private router: Router) {
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

  updateNote(note: Partial<Note>) {
    const id = note.id;

    console.log(note);

    return this.http.put<{ message: string, note: Note }>(this.serverUrl + id, note)
      .pipe(
        tap(() => this.router.navigate(['']))
      );
  }

  postNote(note: Note) {
    return this.http.post<{ message: string, note: Note }>(this.serverUrl, note)
      .pipe(
        tap((res) => this.router.navigate([''])),
        map(res => res.note)
      );
  }

  deleteNote(id: string) {
    this.http.delete<{ message: string }>(this.serverUrl + id)
      .subscribe(
        (res) => {
          // console.log(res.message);
        }
      );
  }
}
