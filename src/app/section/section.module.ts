import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionRoutingModule } from './section-routing.module';
import { PersonalComponent } from './personal/personal.component';
import { ProfessionalComponent } from './professional/professional.component';
import { SectionComponent } from './section.component';


@NgModule({
  declarations: [PersonalComponent, ProfessionalComponent, SectionComponent],
  imports: [
    CommonModule,
    SectionRoutingModule
  ]
})
export class SectionModule { }
