import { Repo } from '../entities/repo.entity';
import { GitProvider } from './git.provider';

export class GithubProvider implements GitProvider {
  async getRepos(username: string): Promise<Repo[]> {
    console.log('GithubProvider getRepos', username);

    const res = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = (await res.json()) as Repo[];

    return repos;
  }
}
