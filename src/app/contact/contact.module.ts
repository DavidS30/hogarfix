import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import {MatButtonModule} from '@angular/material/button';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    ContactRoutingModule
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }
