import { Repo } from '../entities/repo.entity';

export abstract class GitProvider {
  abstract getRepos(): Repo[];
}
