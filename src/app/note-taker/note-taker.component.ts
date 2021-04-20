import { Component, OnInit } from '@angular/core';

import { Note } from '../modules/note'
import { NoteService } from '../services/note.service'
@Component({
  selector: 'app-note-taker',
  templateUrl: './note-taker.component.html',
  styleUrls: ['./note-taker.component.css']
})
export class NoteTakerComponent implements OnInit {

  panelOpenState = false;
  note: Note = new Note();
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
  }

  // onChange(event:any){
  //   if(event.target.name="txttitle")
  //   {
  //    this.note.title=event.target.value; 
  //   }
  //   {
  //    this.note.text=event.target.value; 
  //   }

  // }

  addNote() {
    //  let text="";
    //  let title="";
    this.noteService.addNotes(this.note)
      .subscribe(response => {
        console.log(response);
        alert("saved in json")
      },
        error => {
          console.log(error);

        }
      );

    this.note = new Note();

  }

}
