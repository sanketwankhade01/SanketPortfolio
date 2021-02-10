import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionRoutingModule } from './section-routing.module';
import { PersonalComponent } from './personal/personal.component';
import { ProfessionalComponent } from './professional/professional.component';
import { SectionComponent } from './section.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';


@NgModule({
  declarations: [PersonalComponent, ProfessionalComponent, SectionComponent],
  imports: [
    CommonModule,
    SectionRoutingModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot()
  ]
})
export class SectionModule { }
