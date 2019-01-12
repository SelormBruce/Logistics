import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, 
  MatIconModule, MatFormFieldModule, MatSelectModule, MatCardModule,
  MatExpansionModule,MatInputModule
 } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule,
    CommonModule, MatFormFieldModule, MatSelectModule, MatCardModule,MatExpansionModule,
    MatInputModule
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, 
    MatIconModule, MatFormFieldModule, MatSelectModule, MatCardModule,MatExpansionModule,
    MatInputModule]
})
export class MaterialModule { }
