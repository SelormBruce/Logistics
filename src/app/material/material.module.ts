import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule,MatFormFieldModule,MatSelectModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule,
    CommonModule,MatFormFieldModule,MatSelectModule
  ],
  exports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule,MatFormFieldModule,MatSelectModule]
})
export class MaterialModule { }
