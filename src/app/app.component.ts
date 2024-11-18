import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { ReactiveFormsModule } from '@angular/forms'; --- Module is imported in card form instead ---
import { CardFormComponent } from "./card-form/card-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'creditcard';
}
