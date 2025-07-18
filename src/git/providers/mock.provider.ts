import { Repo } from '../entities/repo.entity';
import { GitProvider } from './git.provider';

export class MockProvider implements GitProvider {
  private readonly mockRepoNames = [
    'awesome-project',
    'cool-app',
    'web-scraper',
    'react-dashboard',
    'nodejs-api',
    'python-ml',
    'vue-components',
    'angular-forms',
    'express-server',
    'typescript-utils',
    'docker-setup',
    'kubernetes-config',
    'microservices-demo',
    'chat-application',
    'e-commerce-site',
    'blog-platform',
    'portfolio-website',
    'mobile-app',
    'desktop-client',
    'automation-tools',
  ];

  private readonly mockDescriptions = [
    'A powerful and flexible web application',
    'Modern UI components for React',
    'Scalable Node.js backend service',
    'Machine learning algorithms in Python',
    'Responsive dashboard with real-time updates',
    'RESTful API with authentication',
    'Cross-platform mobile application',
    'DevOps configuration and scripts',
    'Data visualization and analytics',
    'Open source community project',
    undefined,
  ];

  private readonly mockLanguages = [
    'JavaScript',
    'TypeScript',
    'Python',
    'Java',
    'C++',
    'Go',
    'Rust',
    'PHP',
    'Ruby',
    'Swift',
    'Kotlin',
    'C#',
    undefined,
  ];

  private readonly mockTopics = [
    ['react', 'frontend', 'javascript'],
    ['nodejs', 'backend', 'api'],
    ['python', 'machine-learning', 'ai'],
    ['docker', 'devops', 'kubernetes'],
    ['mobile', 'react-native', 'ios'],
    ['web', 'fullstack', 'typescript'],
    ['opensource', 'tools', 'automation'],
    [],
  ];

  getRepos(username: string): Promise<Repo[]> {
    console.log('MockProvider getRepos', username);

    const repoCount = Math.floor(Math.random() * 6) + 3;
    const repos: Repo[] = [];

    for (let i = 0; i < repoCount; i++) {
      repos.push(this.generateMockRepo(username, i));
    }

    return Promise.resolve(repos);
  }

  private generateMockRepo(username: string, index: number): Repo {
    const repoName = this.getRandomElement(this.mockRepoNames);
    const repoId = Math.floor(Math.random() * 1000000) + index;
    const ownerId = Math.floor(Math.random() * 100000);
    const nodeId = this.generateNodeId();
    const ownerNodeId = this.generateNodeId();

    const createdAt = this.getRandomDate();
    const updatedAt = this.getRandomDateAfter(createdAt);
    const pushedAt = this.getRandomDateAfter(updatedAt);

    const stargazersCount = Math.floor(Math.random() * 1000);
    const forksCount = Math.floor(Math.random() * 100);
    const openIssuesCount = Math.floor(Math.random() * 50);
    const size = Math.floor(Math.random() * 10000);

    return {
      id: repoId,
      node_id: nodeId,
      name: repoName,
      full_name: `${username}/${repoName}`,
      private: Math.random() < 0.1,
      owner: {
        login: username,
        id: ownerId,
        node_id: ownerNodeId,
        avatar_url: `https://avatars.githubusercontent.com/u/${ownerId}?v=4`,
        gravatar_id: '',
        url: `https://api.github.com/users/${username}`,
        html_url: `https://github.com/${username}`,
        followers_url: `https://api.github.com/users/${username}/followers`,
        following_url: `https://api.github.com/users/${username}/following{/other_user}`,
        gists_url: `https://api.github.com/users/${username}/gists{/gist_id}`,
        starred_url: `https://api.github.com/users/${username}/starred{/owner}{/repo}`,
        subscriptions_url: `https://api.github.com/users/${username}/subscriptions`,
        organizations_url: `https://api.github.com/users/${username}/orgs`,
        repos_url: `https://api.github.com/users/${username}/repos`,
        events_url: `https://api.github.com/users/${username}/events{/privacy}`,
        received_events_url: `https://api.github.com/users/${username}/received_events`,
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: `https://github.com/${username}/${repoName}`,
      description: this.getRandomElement(this.mockDescriptions),
      fork: Math.random() < 0.2,
      url: `https://api.github.com/repos/${username}/${repoName}`,
      forks_url: `https://api.github.com/repos/${username}/${repoName}/forks`,
      keys_url: `https://api.github.com/repos/${username}/${repoName}/keys{/key_id}`,
      collaborators_url: `https://api.github.com/repos/${username}/${repoName}/collaborators{/collaborator}`,
      teams_url: `https://api.github.com/repos/${username}/${repoName}/teams`,
      hooks_url: `https://api.github.com/repos/${username}/${repoName}/hooks`,
      issue_events_url: `https://api.github.com/repos/${username}/${repoName}/issues/events{/number}`,
      events_url: `https://api.github.com/repos/${username}/${repoName}/events`,
      assignees_url: `https://api.github.com/repos/${username}/${repoName}/assignees{/user}`,
      branches_url: `https://api.github.com/repos/${username}/${repoName}/branches{/branch}`,
      tags_url: `https://api.github.com/repos/${username}/${repoName}/tags`,
      blobs_url: `https://api.github.com/repos/${username}/${repoName}/git/blobs{/sha}`,
      git_tags_url: `https://api.github.com/repos/${username}/${repoName}/git/tags{/sha}`,
      git_refs_url: `https://api.github.com/repos/${username}/${repoName}/git/refs{/sha}`,
      trees_url: `https://api.github.com/repos/${username}/${repoName}/git/trees{/sha}`,
      statuses_url: `https://api.github.com/repos/${username}/${repoName}/statuses/{sha}`,
      languages_url: `https://api.github.com/repos/${username}/${repoName}/languages`,
      stargazers_url: `https://api.github.com/repos/${username}/${repoName}/stargazers`,
      contributors_url: `https://api.github.com/repos/${username}/${repoName}/contributors`,
      subscribers_url: `https://api.github.com/repos/${username}/${repoName}/subscribers`,
      subscription_url: `https://api.github.com/repos/${username}/${repoName}/subscription`,
      commits_url: `https://api.github.com/repos/${username}/${repoName}/commits{/sha}`,
      git_commits_url: `https://api.github.com/repos/${username}/${repoName}/git/commits{/sha}`,
      comments_url: `https://api.github.com/repos/${username}/${repoName}/comments{/number}`,
      issue_comment_url: `https://api.github.com/repos/${username}/${repoName}/issues/comments{/number}`,
      contents_url: `https://api.github.com/repos/${username}/${repoName}/contents/{+path}`,
      compare_url: `https://api.github.com/repos/${username}/${repoName}/compare/{base}...{head}`,
      merges_url: `https://api.github.com/repos/${username}/${repoName}/merges`,
      archive_url: `https://api.github.com/repos/${username}/${repoName}/{archive_format}{/ref}`,
      downloads_url: `https://api.github.com/repos/${username}/${repoName}/downloads`,
      issues_url: `https://api.github.com/repos/${username}/${repoName}/issues{/number}`,
      pulls_url: `https://api.github.com/repos/${username}/${repoName}/pulls{/number}`,
      milestones_url: `https://api.github.com/repos/${username}/${repoName}/milestones{/number}`,
      notifications_url: `https://api.github.com/repos/${username}/${repoName}/notifications{?since,all,participating}`,
      labels_url: `https://api.github.com/repos/${username}/${repoName}/labels{/name}`,
      releases_url: `https://api.github.com/repos/${username}/${repoName}/releases{/id}`,
      deployments_url: `https://api.github.com/repos/${username}/${repoName}/deployments`,
      created_at: createdAt,
      updated_at: updatedAt,
      pushed_at: pushedAt,
      git_url: `git://github.com/${username}/${repoName}.git`,
      ssh_url: `git@github.com:${username}/${repoName}.git`,
      clone_url: `https://github.com/${username}/${repoName}.git`,
      svn_url: `https://github.com/${username}/${repoName}`,
      homepage:
        Math.random() < 0.3 ? `https://${repoName}.vercel.app` : undefined,
      size: size,
      stargazers_count: stargazersCount,
      watchers_count: stargazersCount,
      language: this.getRandomElement(this.mockLanguages),
      has_issues: Math.random() < 0.8,
      has_projects: Math.random() < 0.6,
      has_downloads: Math.random() < 0.7,
      has_wiki: Math.random() < 0.5,
      has_pages: Math.random() < 0.2,
      has_discussions: Math.random() < 0.3,
      forks_count: forksCount,
      mirror_url: undefined,
      archived: Math.random() < 0.05,
      disabled: false,
      open_issues_count: openIssuesCount,
      license:
        Math.random() < 0.4
          ? {
              key: 'mit',
              name: 'MIT License',
              spdx_id: 'MIT',
              url: 'https://api.github.com/licenses/mit',
              node_id: 'MDc6TGljZW5zZW1pdA==',
            }
          : undefined,
      allow_forking: Math.random() < 0.9,
      is_template: Math.random() < 0.05,
      web_commit_signoff_required: false,
      topics: this.getRandomElement(this.mockTopics),
      visibility: 'public',
      forks: forksCount,
      open_issues: openIssuesCount,
      watchers: stargazersCount,
      default_branch: 'main',
    };
  }

  private getRandomElement<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  private generateNodeId(): string {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 20; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  private getRandomDate(): string {
    const start = new Date(2020, 0, 1);
    const end = new Date(2023, 11, 31);
    const randomDate = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime()),
    );
    return randomDate.toISOString();
  }

  private getRandomDateAfter(afterDate: string): string {
    const start = new Date(afterDate);
    const end = new Date();
    const randomDate = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime()),
    );
    return randomDate.toISOString();
  }
}
