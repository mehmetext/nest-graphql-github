import { Module } from '@nestjs/common';
import { GitResolver } from './git.resolver';
import { GitService } from './git.service';
import { GitProvider } from './providers/git.provider';
import { GithubProvider } from './providers/github.provider';

@Module({
  providers: [
    GitResolver,
    GitService,
    { provide: GitProvider, useClass: GithubProvider },
  ],
})
export class GitModule {}
