import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  
  {
    path: '',
    loadChildren: () => import('./data-collection/data-collection.module').then(m => m.DataCollectionModule)
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./section/section.module').then(m => m.SectionModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
