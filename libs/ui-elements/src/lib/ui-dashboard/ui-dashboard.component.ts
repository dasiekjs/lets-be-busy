import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UINavbarComponent} from "../ui-navbar/ui-navbar.component";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'ui-dashboard',
  standalone: true,
  imports: [CommonModule, UINavbarComponent, RouterOutlet, RouterLink],
  templateUrl: './ui-dashboard.component.html',
  styleUrl: './ui-dashboard.component.css',
})
export class UIDashboardComponent {}
