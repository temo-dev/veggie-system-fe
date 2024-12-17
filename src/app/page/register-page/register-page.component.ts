import { Component,ViewEncapsulation } from '@angular/core';
import { Card } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { Tooltip } from 'primeng/tooltip';
@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [
    Card,
    InputTextModule,
    FormsModule,
    FloatLabel,
    ButtonModule,
    Tooltip
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
  encapsulation: ViewEncapsulation.None
})
export class RegisterPageComponent {
  user_name: string | undefined;
  password: string | undefined
}
