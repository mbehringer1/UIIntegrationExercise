//https://raw.githubusercontent.com/octokit/octokit.net/master/Octokit/Models/Response/PullRequest.cs

import { User } from './user';
import { Milestone } from './milestone';
import { GitReference } from './gitReference';

export class PullRequest {
    constructor(
        public id: number,
        public url: string,
        public html_url: string,
        public diff_url: string,
        public patch_url: string,
        public issue_url: string,
        public statuses_url: string,
        public number: number,
        public state: string,
        public title: string,
        public body: string,
        public created_at: Date,
        public updated_at: Date,
        public closed_at: Date,
        public merged_at: Date,
        public head: GitReference,
        public base: GitReference,
        public user: User,
        public assignee: User,
        public assignees: User[],
        public mergeable: boolean,
        public merged_by: User,
        public merge_commit_sha: string,
        public comments: string,
        public commits: number,
        public additions: number,
        public deletions: number,
        public changed_files: number,
        public milestone: Milestone,
        public locked: boolean,
        public requested_reviewers: User[]) { }
}