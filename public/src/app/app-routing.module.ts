import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { SingleComponent } from './single/single.component';
import { SinglereviewComponent } from './singlereview/singlereview.component';

const routes: Routes = [
  { path: '', component: ListComponent},
  { path: 'newresto', component: NewComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: 'resto/:id', component: SingleComponent},
  { path: 'review/:id', component: SinglereviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
