//https://raw.githubusercontent.com/octokit/octokit.net/master/Octokit/Models/Response/PullRequest.cs

import { User } from './user';
import { Milestone } from './milestone';
import { GitReference } from './gitReference';

export class PullRequest {
    constructor(
        public Id: number,
        public Url: string,
        public HtmlUrl: string,
        public DiffUrl: string,
        public PatchUrl: string,
        public IssueUrl: string,
        public StatusesUrl: string,
        public Number: number,
        public State: string,
        public Title: string,
        public Body: string,
        public CreatedAt: Date,
        public UpdatedAt: Date,
        public ClosedAt: Date,
        public MergedAt: Date,
        public Head: GitReference,
        public Base: GitReference,
        public User: User,
        public Assignee: User,
        public Assignees: User[],
        public Mergeable: boolean,
        public MergedBy: User,
        public MergeCommitSha: string,
        public Comments: string,
        public Commits: number,
        public Additions: number,
        public Deletions: number,
        public ChangedFiles: number,
        public Milestone: Milestone,
        public Locked: boolean,
        public RequestedReviewers: User[]) { }
}