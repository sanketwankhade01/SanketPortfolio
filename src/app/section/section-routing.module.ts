import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionComponent } from './section.component';
import { ProfessionalComponent } from './professional/professional.component';
import { PersonalComponent } from './personal/personal.component';


const routes: Routes = [
  {
    path: '',
    children:[
      {
        path:'',
        redirectTo:  'index'
      },
      {
        path: 'index',
        component: SectionComponent,
      },
      {
        path: 'personal',
        component: PersonalComponent,
      },
      {
        path: 'professional',
        component: ProfessionalComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionRoutingModule { }
