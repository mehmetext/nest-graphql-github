import { Module } from '@nestjs/common';
import { GitResolver } from './git.resolver';
import { GitService } from './git.service';
import { GitProvider } from './providers/git.provider';
import { GithubProvider } from './providers/github.provider';
import { MockProvider } from './providers/mock.provider';

@Module({
  providers: [
    GitResolver,
    GitService,
    {
      provide: GitProvider,
      useFactory: () => {
        if (!process.env.NODE_ENV) {
          throw new Error('NODE_ENV is not set');
        }
        if (process.env.NODE_ENV === 'production') {
          return new GithubProvider();
        }
        return new MockProvider();
      },
    },
  ],
})
export class GitModule {}
