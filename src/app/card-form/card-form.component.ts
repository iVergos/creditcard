import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InputComponent } from "../input/input.component";
import { DateFormControl } from '../date-form-control';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputComponent, CardComponent],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css'
})
export class CardFormComponent {
  cardForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16)
    ]),
    expiration: new DateFormControl('', [
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3)
    ])
  });

  onSubmit() {
    console.log('Form was Submitted')
  }

  onResetClick() {
    this.cardForm.reset();
  }
}
