import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({
  description: 'GitHub repository owner entity',
})
export class RepoOwner {
  @Field(() => String, {
    description: 'The login name of the owner',
  })
  login: string;

  @Field(() => Int, {
    description: 'The id of the owner',
  })
  id: number;

  @Field(() => String, {
    description: 'The node id of the owner',
  })
  node_id: string;

  @Field(() => String, {
    description: 'The avatar URL of the owner',
  })
  avatar_url: string;

  @Field(() => String, {
    description: 'The gravatar id of the owner',
  })
  gravatar_id: string;

  @Field(() => String, {
    description: 'The API URL of the owner',
  })
  url: string;

  @Field(() => String, {
    description: 'The HTML URL of the owner',
  })
  html_url: string;

  @Field(() => String, {
    description: 'The followers URL of the owner',
  })
  followers_url: string;

  @Field(() => String, {
    description: 'The following URL of the owner',
  })
  following_url: string;

  @Field(() => String, {
    description: 'The gists URL of the owner',
  })
  gists_url: string;

  @Field(() => String, {
    description: 'The starred URL of the owner',
  })
  starred_url: string;

  @Field(() => String, {
    description: 'The subscriptions URL of the owner',
  })
  subscriptions_url: string;

  @Field(() => String, {
    description: 'The organizations URL of the owner',
  })
  organizations_url: string;

  @Field(() => String, {
    description: 'The repos URL of the owner',
  })
  repos_url: string;

  @Field(() => String, {
    description: 'The events URL of the owner',
  })
  events_url: string;

  @Field(() => String, {
    description: 'The received events URL of the owner',
  })
  received_events_url: string;

  @Field(() => String, {
    description: 'The type of the owner',
  })
  type: string;

  @Field(() => String, {
    description: 'The user view type of the owner',
  })
  user_view_type: string;

  @Field(() => Boolean, {
    description: 'Whether the owner is a site admin',
  })
  site_admin: boolean;
}

@ObjectType({
  description: 'GitHub repository license entity',
})
export class RepoLicense {
  @Field(() => String, {
    description: 'The key of the license',
  })
  key: string;

  @Field(() => String, {
    description: 'The name of the license',
  })
  name: string;

  @Field(() => String, {
    description: 'The SPDX id of the license',
  })
  spdx_id: string;

  @Field(() => String, {
    description: 'The URL of the license',
  })
  url: string;

  @Field(() => String, {
    description: 'The node id of the license',
  })
  node_id: string;
}

@ObjectType({
  description: 'GitHub repository entity',
})
export class Repo {
  @Field(() => Int, {
    description: 'The id of the repo',
  })
  id: number;

  @Field(() => String, {
    description: 'The node id of the repo',
  })
  node_id: string;

  @Field(() => String, {
    description: 'The name of the repo',
  })
  name: string;

  @Field(() => String, {
    description: 'The full name of the repo',
  })
  full_name: string;

  @Field(() => Boolean, {
    description: 'Whether the repo is private',
  })
  private: boolean;

  @Field(() => RepoOwner, {
    description: 'The owner of the repo',
  })
  owner: RepoOwner;

  @Field(() => String, {
    description: 'The HTML URL of the repo',
  })
  html_url: string;

  @Field(() => String, {
    nullable: true,
    description: 'The description of the repo',
  })
  description?: string;

  @Field(() => Boolean, {
    description: 'Whether the repo is a fork',
  })
  fork: boolean;

  @Field(() => String, {
    description: 'The API URL of the repo',
  })
  url: string;

  @Field(() => String, {
    description: 'The forks URL of the repo',
  })
  forks_url: string;

  @Field(() => String, {
    description: 'The keys URL of the repo',
  })
  keys_url: string;

  @Field(() => String, {
    description: 'The collaborators URL of the repo',
  })
  collaborators_url: string;

  @Field(() => String, {
    description: 'The teams URL of the repo',
  })
  teams_url: string;

  @Field(() => String, {
    description: 'The hooks URL of the repo',
  })
  hooks_url: string;

  @Field(() => String, {
    description: 'The issue events URL of the repo',
  })
  issue_events_url: string;

  @Field(() => String, {
    description: 'The events URL of the repo',
  })
  events_url: string;

  @Field(() => String, {
    description: 'The assignees URL of the repo',
  })
  assignees_url: string;

  @Field(() => String, {
    description: 'The branches URL of the repo',
  })
  branches_url: string;

  @Field(() => String, {
    description: 'The tags URL of the repo',
  })
  tags_url: string;

  @Field(() => String, {
    description: 'The blobs URL of the repo',
  })
  blobs_url: string;

  @Field(() => String, {
    description: 'The git tags URL of the repo',
  })
  git_tags_url: string;

  @Field(() => String, {
    description: 'The git refs URL of the repo',
  })
  git_refs_url: string;

  @Field(() => String, {
    description: 'The trees URL of the repo',
  })
  trees_url: string;

  @Field(() => String, {
    description: 'The statuses URL of the repo',
  })
  statuses_url: string;

  @Field(() => String, {
    description: 'The languages URL of the repo',
  })
  languages_url: string;

  @Field(() => String, {
    description: 'The stargazers URL of the repo',
  })
  stargazers_url: string;

  @Field(() => String, {
    description: 'The contributors URL of the repo',
  })
  contributors_url: string;

  @Field(() => String, {
    description: 'The subscribers URL of the repo',
  })
  subscribers_url: string;

  @Field(() => String, {
    description: 'The subscription URL of the repo',
  })
  subscription_url: string;

  @Field(() => String, {
    description: 'The commits URL of the repo',
  })
  commits_url: string;

  @Field(() => String, {
    description: 'The git commits URL of the repo',
  })
  git_commits_url: string;

  @Field(() => String, {
    description: 'The comments URL of the repo',
  })
  comments_url: string;

  @Field(() => String, {
    description: 'The issue comment URL of the repo',
  })
  issue_comment_url: string;

  @Field(() => String, {
    description: 'The contents URL of the repo',
  })
  contents_url: string;

  @Field(() => String, {
    description: 'The compare URL of the repo',
  })
  compare_url: string;

  @Field(() => String, {
    description: 'The merges URL of the repo',
  })
  merges_url: string;

  @Field(() => String, {
    description: 'The archive URL of the repo',
  })
  archive_url: string;

  @Field(() => String, {
    description: 'The downloads URL of the repo',
  })
  downloads_url: string;

  @Field(() => String, {
    description: 'The issues URL of the repo',
  })
  issues_url: string;

  @Field(() => String, {
    description: 'The pulls URL of the repo',
  })
  pulls_url: string;

  @Field(() => String, {
    description: 'The milestones URL of the repo',
  })
  milestones_url: string;

  @Field(() => String, {
    description: 'The notifications URL of the repo',
  })
  notifications_url: string;

  @Field(() => String, {
    description: 'The labels URL of the repo',
  })
  labels_url: string;

  @Field(() => String, {
    description: 'The releases URL of the repo',
  })
  releases_url: string;

  @Field(() => String, {
    description: 'The deployments URL of the repo',
  })
  deployments_url: string;

  @Field(() => String, {
    description: 'The creation date of the repo',
  })
  created_at: string;

  @Field(() => String, {
    description: 'The last update date of the repo',
  })
  updated_at: string;

  @Field(() => String, {
    description: 'The last push date of the repo',
  })
  pushed_at: string;

  @Field(() => String, {
    description: 'The git URL of the repo',
  })
  git_url: string;

  @Field(() => String, {
    description: 'The SSH URL of the repo',
  })
  ssh_url: string;

  @Field(() => String, {
    description: 'The clone URL of the repo',
  })
  clone_url: string;

  @Field(() => String, {
    description: 'The SVN URL of the repo',
  })
  svn_url: string;

  @Field(() => String, {
    nullable: true,
    description: 'The homepage of the repo',
  })
  homepage?: string;

  @Field(() => Int, {
    description: 'The size of the repo',
  })
  size: number;

  @Field(() => Int, {
    description: 'The stargazers count of the repo',
  })
  stargazers_count: number;

  @Field(() => Int, {
    description: 'The watchers count of the repo',
  })
  watchers_count: number;

  @Field(() => String, {
    nullable: true,
    description: 'The primary language of the repo',
  })
  language?: string;

  @Field(() => Boolean, {
    description: 'Whether the repo has issues',
  })
  has_issues: boolean;

  @Field(() => Boolean, {
    description: 'Whether the repo has projects',
  })
  has_projects: boolean;

  @Field(() => Boolean, {
    description: 'Whether the repo has downloads',
  })
  has_downloads: boolean;

  @Field(() => Boolean, {
    description: 'Whether the repo has wiki',
  })
  has_wiki: boolean;

  @Field(() => Boolean, {
    description: 'Whether the repo has pages',
  })
  has_pages: boolean;

  @Field(() => Boolean, {
    description: 'Whether the repo has discussions',
  })
  has_discussions: boolean;

  @Field(() => Int, {
    description: 'The forks count of the repo',
  })
  forks_count: number;

  @Field(() => String, {
    nullable: true,
    description: 'The mirror URL of the repo',
  })
  mirror_url?: string;

  @Field(() => Boolean, {
    description: 'Whether the repo is archived',
  })
  archived: boolean;

  @Field(() => Boolean, {
    description: 'Whether the repo is disabled',
  })
  disabled: boolean;

  @Field(() => Int, {
    description: 'The open issues count of the repo',
  })
  open_issues_count: number;

  @Field(() => RepoLicense, {
    nullable: true,
    description: 'The license of the repo',
  })
  license?: RepoLicense;

  @Field(() => Boolean, {
    description: 'Whether forking is allowed',
  })
  allow_forking: boolean;

  @Field(() => Boolean, {
    description: 'Whether the repo is a template',
  })
  is_template: boolean;

  @Field(() => Boolean, {
    description: 'Whether web commit signoff is required',
  })
  web_commit_signoff_required: boolean;

  @Field(() => [String], {
    description: 'The topics of the repo',
  })
  topics: string[];

  @Field(() => String, {
    description: 'The visibility of the repo',
  })
  visibility: string;

  @Field(() => Int, {
    description: 'The forks count of the repo',
  })
  forks: number;

  @Field(() => Int, {
    description: 'The open issues count of the repo',
  })
  open_issues: number;

  @Field(() => Int, {
    description: 'The watchers count of the repo',
  })
  watchers: number;

  @Field(() => String, {
    description: 'The default branch of the repo',
  })
  default_branch: string;
}
