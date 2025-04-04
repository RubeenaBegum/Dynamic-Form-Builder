import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormBuilderComponent } from './form-builder.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,  
    DragDropModule,       
    FormBuilderComponent  
  ]
})
export class FormBuilderModule { }
