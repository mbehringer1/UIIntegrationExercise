//https://raw.githubusercontent.com/octokit/octokit.net/master/Octokit/Models/Response/Issue.cs

import { User } from './user';
import { Label } from './label';
import { Milestone } from './milestone';
import { PullRequest } from './pullrequest';
import { Repository } from './repository';

export class Issue {
    constructor(
        public Id: number,
        public Url: string,
        public HtmlUrl: string,
        public CommentsUrl: string,
        public EventsUrl: string,
        public Number: number,
        public State: string,
        public Title: string,
        public Body: string,
        public ClosedBy: User,
        public User: User,
        public Labels: Label[],
        public Assignee: User,
        public Assignees: User[],
        public Milestone: Milestone,
        public Comments: number,
        public PullRequest: PullRequest,
        public ClosedAt: Date,
        public CreatedAt: Date,
        public UpdatedAt: Date,
        public Locked: boolean,
        public Repository: Repository,
    )
    { }
}