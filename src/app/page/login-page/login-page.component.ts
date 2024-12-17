
import { Component,ViewEncapsulation } from '@angular/core';
import { Card } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { Tooltip } from 'primeng/tooltip';
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    Card,
    InputTextModule,
    FormsModule,
    FloatLabel,
    ButtonModule,
    Tooltip
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
    encapsulation: ViewEncapsulation.None
})
export class LoginPageComponent {
  user_name: string | undefined;
  password: string | undefined
}
