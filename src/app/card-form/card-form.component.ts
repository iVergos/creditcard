import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css'
})
export class CardFormComponent {
  cardForm = new FormGroup ({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])
  });
}
