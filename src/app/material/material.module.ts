import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatFormField, MatFormFieldControl } from '@angular/material/form-field';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule
  ],
  exports: [
    MatGridListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }
