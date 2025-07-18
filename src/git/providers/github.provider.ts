import { Repo } from '../entities/repo.entity';
import { GitProvider } from './git.provider';

export class GithubProvider implements GitProvider {
  getRepos(): Repo[] {
    console.log('GithubProvider getRepos');
    return [];
  }
}
