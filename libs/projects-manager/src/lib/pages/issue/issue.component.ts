import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createBreadcrumb, UiBreadcrumbComponent, UiCardComponent } from '@lets-be-busy/shared-ui';
import { Issue } from '../../models/issue';


@Component({
  selector: 'lbb-pm-issue',
  standalone: true,
  imports: [CommonModule, UiCardComponent, UiBreadcrumbComponent],
  templateUrl: './issue.component.html',
  styleUrl: './issue.component.scss'
})
export class IssueComponent {

  issue = input.required<Issue>();

  breadcrumbs = computed(() => {
    const data = [];
    if (this.issue().project) {
      const { label, id } = this.issue().project;
      data.push(
        createBreadcrumb(
          label, ['/', 'projects', `${id}`]
        )
      );
    }

    if (this.issue().parentIssue) {
      const { title, code } = this.issue().parentIssue;
      data.push(
        createBreadcrumb(
          title, ['/', 'browse', `${code}`]
        )
      );
    }

    const { title } = this.issue();

    data.push(
      createBreadcrumb(
        title, null
      )
    );
    return data;
  });

}
