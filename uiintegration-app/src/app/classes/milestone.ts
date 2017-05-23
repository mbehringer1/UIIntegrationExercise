//https://raw.githubusercontent.com/octokit/octokit.net/master/Octokit/Models/Response/Milestone.cs

import { User } from './user';

export class Milestone {
    constructor(
        public url: string,
        public html_url: string,
        public number: number,
        public state: string,
        public title: string,
        public description: string,
        public creator: User,
        public open_issues: number,
        public closed_issues: number,
        public created_at: Date,
        public due_on: Date,
        public closed_at: Date
    ) { }
}