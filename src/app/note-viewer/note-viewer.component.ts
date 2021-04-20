import { Component, OnInit } from '@angular/core';
import { Note } from '../modules/note';
import { NoteService } from '../services/note.service'

@Component({
  selector: 'app-note-viewer',
  templateUrl: './note-viewer.component.html',
  styleUrls: ['./note-viewer.component.css']
})
export class NoteViewerComponent implements OnInit {

  notesList: Array<Note> = []
  constructor(private noteSrvice: NoteService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }


  getAllNotes() {
    this.noteSrvice.getNotes()
      .subscribe(response => {
        console.log(response);
        this.notesList = response;
      },
        error => {
          console.log(error);

        })
  }

}
