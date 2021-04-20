import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { LoginComponent } from './login/login.component';
import { NoteHomeComponent } from './note-home/note-home.component';
import { NoteTakerComponent } from './note-taker/note-taker.component';
import { NoteViewerComponent } from './note-viewer/note-viewer.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: "home",
    component: DashBoardComponent    ,
    canActivate:[AuthGuard]
    
  },
  {
    path:'notehome',
    component:NoteHomeComponent,
    canActivate:[AuthGuard],
    children:[
    {
      path:'newnote',
      component:NoteTakerComponent
    },
    {
      path:'allnotes',
      component:NoteViewerComponent
    }
  ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path:'', redirectTo:'home', pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
