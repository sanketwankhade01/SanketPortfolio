import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddInfoComponent } from './add-info/add-info.component';


const routes: Routes = [
  {
    path: '',
    component: AddInfoComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataCollectionRoutingModule { }
