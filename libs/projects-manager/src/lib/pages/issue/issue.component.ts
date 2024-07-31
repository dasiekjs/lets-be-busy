import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lbb-pm-issue',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './issue.component.html',
  styleUrl: './issue.component.scss',
})
export class IssueComponent {

  issue = input.required();
}
