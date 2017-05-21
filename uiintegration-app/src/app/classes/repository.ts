//https://raw.githubusercontent.com/octokit/octokit.net/master/Octokit/Models/Response/Repository.cs

import { User } from './user';
import { RepositoryPermissions } from './repositoryPermissions';

export class Repository {
    constructor(
        public Url: string,
        public HtmlUrl: string,
        public CloneUrl: string,
        public GitUrl: string,
        public SshUrl: string,
        public SvnUrl: string,
        public MirrorUrl: string,
        public Id: number,
        public Owner: User,
        public Name: string,
        public FullName: string,
        public Description: string,
        public Homepage: string,
        public Language: string,
        public Private: boolean,
        public Fork: boolean,
        public ForksCount: number,
        public StargazersCount: number,
        public DefaultBranch: string,
        public OpenIssuesCount: number,
        public PushedAt: Date,
        public CreatedAt: Date,
        public UpdatedAt: Date,
        public Permissions: RepositoryPermissions,
        public Parent: Repository,
        public Source: Repository,
        public HasIssues: boolean,
        public HasWiki: boolean,
        public HasDownloads: boolean,
        public HasPages: boolean,
        public SubscribersCount: number,
        public Size: number,
        public AllowRebaseMerge: boolean,
        public AllowSquashMerge: boolean,
        public AllowMergeCommit: boolean) { }
}