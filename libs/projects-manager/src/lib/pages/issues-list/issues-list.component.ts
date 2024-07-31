import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  UiCardComponent,
  UiCardHeaderDirective,
  UiCardTitleDirective,
  UiLoaderComponent
} from '@lets-be-busy/shared-ui';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { IssueComponent } from '../issue/issue.component';
import { delay, finalize, map, of, switchMap, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

const requestForIssue = (id: string | number) =>
  of(id)
    .pipe(
      delay(1000),
      map((id) => ({
        id,
        code: `LBB-${id}`,
        title: `Example issue with id: ${id}`,
        description: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum at metus rhoncus, tempor mi sit amet, sollicitudin felis.
          Nulla dignissim sollicitudin odio nec feugiat.
          Fusce scelerisque scelerisque mauris ut eleifend.
          Praesent varius ultricies magna, a consectetur nibh posuere sit amet.
          Praesent ullamcorper non ipsum ac luctus. Nam molestie ornare diam non lacinia.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          Maecenas blandit urna non lectus bibendum mattis.
        `
      }))
    );

@Component({
  selector: 'lbb-pm-issues-list',
  standalone: true,
  imports: [CommonModule, UiCardComponent, UiCardHeaderDirective, UiCardTitleDirective, RouterLink, RouterOutlet, IssueComponent, UiLoaderComponent],
  templateUrl: './issues-list.component.html',
  styleUrl: './issues-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssuesListComponent {

  private onLoadingIssue = signal<boolean>(false);
  private selectedIssue = toSignal(
    inject(ActivatedRoute).queryParams
      .pipe(
        map(params => params['issue']),
        tap(() => this.onLoadingIssue.set(true)),
        switchMap(issueId =>
          requestForIssue(issueId)
            .pipe(tap(() => this.onLoadingIssue.set(false)))
        )
      )
  );

  vm = computed(() => {
    return {
      onLoadingIssue: this.onLoadingIssue(),
      selectedIssue: this.selectedIssue()
    }
  })


}
