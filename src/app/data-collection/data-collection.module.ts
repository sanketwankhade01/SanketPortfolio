import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataCollectionRoutingModule } from './data-collection-routing.module';
import { AddInfoComponent } from './add-info/add-info.component';
import { CKEditorModule } from 'ngx-ckeditor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [AddInfoComponent],
  imports: [
    CommonModule,
    DataCollectionRoutingModule,
    CKEditorModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot()
  ]
})
export class DataCollectionModule { }
