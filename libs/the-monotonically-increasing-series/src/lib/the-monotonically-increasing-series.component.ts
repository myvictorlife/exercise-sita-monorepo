import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lib-the-monotonically-increasing-series',
  standalone: true,
  templateUrl: './the-monotonically-increasing-series.component.html',
  imports: [
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    NgFor
  ],
  styles: [    
  ]
})
export class TheMonotonicallyIncreasingSeriesComponent {

}
