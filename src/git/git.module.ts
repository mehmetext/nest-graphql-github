import { Module } from '@nestjs/common';
import { GitResolver } from './git.resolver';
import { GitService } from './git.service';

@Module({
  providers: [GitResolver, GitService],
})
export class GitModule {}
