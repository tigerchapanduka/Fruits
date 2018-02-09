import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl} from '@angular/forms';
import { MatButtonModule,MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  imports: [MatButtonModule,MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule,MatSelectModule],
  exports: [MatButtonModule,MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule,MatSelectModule],
})
export class MaterialModule { }