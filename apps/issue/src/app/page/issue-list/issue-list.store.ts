import {Issue, IssueId, ProjectId} from '@lets-be-busy/lbb-project';
import {patchState, signalStore, withHooks, withMethods, withState} from '@ngrx/signals';

import {inject} from '@angular/core';
import {LbbIssueRepository} from '@lets-be-busy/lbb-project';
import {firstValueFrom, isObservable, Observable} from "rxjs";
import {addEntities, SelectEntityId, withEntities} from "@ngrx/signals/entities";

const intoPromise = <T>(_input: T | Promise<T> | Observable<T>): Promise<T> => {
  if (_input instanceof Promise) {
    return _input;
  }

  if (isObservable(_input)) {
    return firstValueFrom(_input);
  }

  return Promise.resolve(_input);
}

type IssueListState = {
  entities: Issue[];
  onLoading: boolean;
}

const initialState: IssueListState = {
  entities: [],
  onLoading: false
}

export const IssueListStore = signalStore(
  withState(initialState),
  withMethods((store, issueRepository = inject(LbbIssueRepository)) => ({
      async loadData(filters: { projectId: ProjectId }): Promise<void> {

        patchState(store, {
          onLoading: true
        })

        const issues = await intoPromise(issueRepository.findIssuesByProject(filters.projectId));
        patchState(store, {
          onLoading: false,
          entities: issues
        });
      },
    }
  )),
  withHooks({
    onInit(store) {
      store.loadData({projectId:new ProjectId('LBB')});
    }
  })
);
