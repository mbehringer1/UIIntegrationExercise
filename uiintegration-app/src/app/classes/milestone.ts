//https://raw.githubusercontent.com/octokit/octokit.net/master/Octokit/Models/Response/Milestone.cs

import { User } from './user';

export class Milestone {
    constructor(
        public Url: string,
        public HtmlUrl: string,
        public Number: number,
        public State: string,
        public Title: string,
        public Descriptioin: string,
        public Creator: User,
        public OpenIssues: number,
        public ClosedIssues: number,
        public CreatedAt: Date,
        public DueOn: Date,
        public ClosedAt: Date
    ) { }
}