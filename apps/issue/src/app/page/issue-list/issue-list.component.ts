import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {IssueListStore} from "./issue-list.store";

@Component({
  selector: 'app-issues-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './issue-list.component.html',
  styleUrl: './issue-list.component.css',
  providers: [IssueListStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssuesListComponent {
  public readonly vm = inject(IssueListStore);

}
