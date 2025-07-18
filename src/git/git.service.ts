import { Injectable } from '@nestjs/common';
import { Repo } from './entities/repo.entity';

@Injectable()
export class GitService {
  getRepos(): Repo[] {
    return [];
  }
}
