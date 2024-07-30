import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCardComponent, UiCardHeaderDirective, UiCardTitleDirective } from '@lets-be-busy/shared-ui';

@Component({
  selector: 'lib-issues-list',
  standalone: true,
  imports: [CommonModule, UiCardComponent, UiCardHeaderDirective, UiCardTitleDirective],
  templateUrl: './issues-list.component.html',
  styleUrl: './issues-list.component.scss',
})
export class IssuesListComponent {}
