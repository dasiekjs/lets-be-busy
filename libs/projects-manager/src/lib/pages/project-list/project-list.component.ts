import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  UiCardComponent,
  UiCardHeaderDirective,
  UiCardSubtitleDirective,
  UiCardTitleDirective
} from '@lets-be-busy/shared-ui';

@Component({
  selector: 'lib-project-list',
  standalone: true,
  imports: [CommonModule, UiCardComponent, UiCardHeaderDirective, UiCardTitleDirective, UiCardSubtitleDirective],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent {}
