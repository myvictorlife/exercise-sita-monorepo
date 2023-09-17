import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { calculateLicensePlate, selectAllLicensePlates } from '@sita/storage';

@Component({
  selector: 'lib-license-plate-exercise',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule
  ],
  templateUrl: './license-plate-exercise.component.html',
  styleUrls: ['./license-plate-exercise.component.scss']
})
export class TheLicensePlateProblemComponent {

  form: FormGroup;

  selectAllLicensePlates = this.store.selectSignal(selectAllLicensePlates);
  constructor(private store: Store, private fb: FormBuilder) {
    this.form = this.fb.group({
      index: ['', [Validators.required, Validators.min(1)]]
    });
  }


  calculate() {
    if (this.form.valid) {
      const index = parseInt(this.form.get('index')?.value);
      this.store.dispatch(calculateLicensePlate({ index }));
    }
  }
}
