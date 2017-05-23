//https://raw.githubusercontent.com/octokit/octokit.net/master/Octokit/Models/Response/Issue.cs

import { User } from './user';
import { Label } from './label';
import { Milestone } from './milestone';
import { PullRequest } from './pullrequest';
import { Repository } from './repository';

export class Issue {
    constructor(
        public id: number,
        public url: string,
        public html_url: string,
        public comments_url: string,
        public events_url: string,
        public number: number,
        public state: string,
        public title: string,
        public body: string,
        public closed_by: User,
        public user: User,
        public labels: Label[],
        public assignee: User,
        public assignees: User[],
        public milestone: Milestone,
        public comments: number,
        public pull_request: PullRequest,
        public closed_at: Date,
        public created_at: Date,
        public updated_at: Date,
        public locked: boolean,
        public repository: Repository,
    )
    { }
}