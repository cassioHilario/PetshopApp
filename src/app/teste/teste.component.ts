import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-teste',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css'
})
export class TesteComponent {
  myTheme = 'my-theme';
}
