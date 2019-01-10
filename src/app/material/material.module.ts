import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, 
  MatIconModule, MatFormFieldModule, MatSelectModule, MatCardModule
 } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule,
    CommonModule, MatFormFieldModule, MatSelectModule, MatCardModule
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, 
    MatIconModule, MatFormFieldModule, MatSelectModule, MatCardModule]
})
export class MaterialModule { }
