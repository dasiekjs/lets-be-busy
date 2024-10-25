import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Comment, User, UserId } from '@lets-be-busy/lbb-project';

@Component({
  selector: 'app-display-issue',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dislay-issue.component.html',
  styleUrl: './dislay-issue.component.css',
})
export class DisplayIssueComponent {

  comments = [
    new Comment(1, "Example Comment", new User(new UserId("1"), "Example user", true), new Date()),
    new Comment(2, "Example Comment", new User(new UserId("1"), "Example user", true), new Date()),
    new Comment(3, "Example Comment", new User(new UserId("1"), "Example user", true), new Date()),
    new Comment(4, "Example Comment", new User(new UserId("1"), "Example user", true), new Date()),
  ];
}
