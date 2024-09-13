import { MatButtonModule } from '@angular/material/button';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';
import { customIcons } from './custom-icons';
import { HttpClient } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import { TesteComponent } from './teste/teste.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIconModule,
    MatSidenavModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    LoginComponent,
    TesteComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HttpClient]
})
export class AppComponent{
  title = 'PetshopApp';

  private MatIconRegistry = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer);

  constructor() {
    customIcons.forEach(({ svg, path }) => {
      this.MatIconRegistry.addSvgIcon(
        svg,
        this.domSanitizer.bypassSecurityTrustResourceUrl(path)
      );
    });
  }

  isSidenavOpened = false;

  toggleSidenav() {
    this.isSidenavOpened = !this.isSidenavOpened;
  }
}
