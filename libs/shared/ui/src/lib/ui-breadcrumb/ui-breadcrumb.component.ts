import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelWithRouter } from './models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ui-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './ui-breadcrumb.component.html',
  styleUrl: './ui-breadcrumb.component.scss',
})
export class UiBreadcrumbComponent {

  breadcrumbs = input.required<LabelWithRouter[]>()
}
