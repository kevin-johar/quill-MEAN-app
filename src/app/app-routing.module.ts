import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesListComponent } from './components/notes/notes-list/notes-list.component';
import { NoteCreateComponent } from './components/notes/note-create/note-create.component';
import { NoteListItemComponent } from './components/notes/note-list-item/note-list-item.component';


const routes: Routes = [
  {
    path: '',
    component: NotesListComponent
  },
  {
    path: 'create',
    component: NoteCreateComponent
  },
  {
    path: 'notes',
    component: NotesListComponent
  },
  {
    path: 'notes/:id',
    component: NoteListItemComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
