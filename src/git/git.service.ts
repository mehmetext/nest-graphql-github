import { Injectable } from '@nestjs/common';
import { Repo } from './entities/repo.entity';
import { GitProvider } from './providers/git.provider';

@Injectable()
export class GitService {
  constructor(private readonly gitProvider: GitProvider) {}

  getRepos(username: string): Promise<Repo[]> {
    return this.gitProvider.getRepos(username);
  }
}
