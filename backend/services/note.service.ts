import { Injectable } from '@angular/core';
import { environment } from '../../src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class NoteService {
  private serverUrl = environment.apiUrl + '/';

  constructor(private http: HttpClient) {
  }

  getNotes() {
    this.http.get<{ message: string, notes: any }>(this.serverUrl)
      .pipe();
  }
}
