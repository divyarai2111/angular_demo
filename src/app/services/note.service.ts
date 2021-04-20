import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Note } from '../modules/note';


@Injectable()
export class NoteService {
  //httpClient

  constructor(private httpClient:HttpClient) { }


  addNotes(notes:Note) {
    // fetch Method , to storer

    return this.httpClient.post<Note>('http://localhost:3000/notes',notes)
  }

  getNotes() {
    return this.httpClient.get<Array<Note>>('http://localhost:3000/notes')
  }
}
