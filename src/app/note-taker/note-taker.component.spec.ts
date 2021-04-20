import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoteService } from '../services/note.service';

import { NoteTakerComponent } from './note-taker.component';

describe('NoteTakerComponent', () => {
  let component: NoteTakerComponent;
  let fixture: ComponentFixture<NoteTakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        RouterTestingModule,
        HttpClientModule
        
      ],
      declarations: [ NoteTakerComponent ],
      providers:[
        NoteService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteTakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
