import { Repo } from '../entities/repo.entity';

export abstract class GitProvider {
  abstract getRepos(username: string): Promise<Repo[]>;
}
