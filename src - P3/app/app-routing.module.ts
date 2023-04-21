import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BooksComponent } from './books/books.component';
import { WrongChoiceComponent } from './wrong-choice/wrong-choice.component';

const routes: Routes = [
  {path : 'technologies', component : TechnologiesComponent},
  {path : 'books', component : BooksComponent},
  {path : 'wrong-choice', component : WrongChoiceComponent},
  {path : '', component : TechnologiesComponent},
  {path : '**', component : WrongChoiceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
