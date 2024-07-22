import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ApplicationNavbarComponent } from '../application-navbar/application-navbar.component';

@Component({
  selector: 'app-application-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ApplicationNavbarComponent],
  templateUrl: './application-layout.component.html',
  styleUrl: './application-layout.component.scss',
})
export class ApplicationLayoutComponent {}
