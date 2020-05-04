import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesListComponent } from './components/notes/notes-list/notes-list.component';
import { NoteEditorComponent } from './components/notes/note-editor/note-editor.component';
import { NoteViewComponent } from './components/notes/note-view/note-view.component';
import { NotesResolver } from './components/notes/notes.resolver';


const routes: Routes = [
  {
    path: '',
    component: NotesListComponent,
    resolve: {
      notes: NotesResolver
    }
  },
  {
    path: 'note/:id',
    component: NoteViewComponent
  },
  {
    path: 'create',
    component: NoteEditorComponent
  },
  {
    path: 'edit/:id',
    component: NoteEditorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
