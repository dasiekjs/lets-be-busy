import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {LbbIssueRepository} from "@lets-be-busy/lbb-project";
import {InMemoryIssueRepository} from "@lets-be-busy/source-in-memory";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    {
      provide: LbbIssueRepository,
      useFactory: () => new InMemoryIssueRepository()
    }
  ],
};
