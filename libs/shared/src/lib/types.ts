import {Observable} from "rxjs";

export type MaybeAsync<T> = T | Awaited<T> | Observable<T>;
export type MaybeArrayAsync<T> = MaybeAsync<T[]>;
