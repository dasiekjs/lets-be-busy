import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UiButtonDirective } from '@lets-be-busy/shared-ui';

@Component({
  selector: 'app-application-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, UiButtonDirective],
  templateUrl: './application-navbar.component.html',
  styleUrl: './application-navbar.component.scss',
})
export class ApplicationNavbarComponent {}
