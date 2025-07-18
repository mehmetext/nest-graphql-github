import { Repo } from '../entities/repo.entity';
import { GitProvider } from './git.provider';

export class MockProvider implements GitProvider {
  getRepos(): Repo[] {
    console.log('MockProvider getRepos');
    return [];
  }
}
