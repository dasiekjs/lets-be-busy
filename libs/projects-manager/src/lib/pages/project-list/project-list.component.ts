import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  UiButtonDirective,
  UiCardComponent,
  UiCardHeaderDirective,
  UiCardSubtitleDirective,
  UiCardTitleDirective
} from '@lets-be-busy/shared-ui';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'lib-project-list',
  standalone: true,
  imports: [CommonModule, UiCardComponent, UiCardHeaderDirective, UiCardTitleDirective, UiCardSubtitleDirective, UiButtonDirective, RouterLinkActive, RouterLink],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss',
})
export class ProjectListComponent {}
