import { Args, Query, Resolver } from '@nestjs/graphql';
import { Repo } from './entities/repo.entity';
import { GitService } from './git.service';

@Resolver(() => Repo)
export class GitResolver {
  constructor(private readonly gitService: GitService) {}

  @Query(() => [Repo])
  repos(@Args('username') username: string): Promise<Repo[]> {
    return this.gitService.getRepos(username);
  }
}
