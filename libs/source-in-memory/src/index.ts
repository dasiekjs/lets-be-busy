import {LbbIssueRepository} from "@lets-be-busy/lbb-project";
import {InMemoryIssueRepository} from "./lib/repository/in-memory-issue.repository";

export const InMemoryRepositories = {
  issueRepository : {
    provide: LbbIssueRepository,
    useFactory: () => {
      return new InMemoryIssueRepository(500, 1500);
    }
  }
}

export * from './lib/repository/in-memory-issue.repository';
