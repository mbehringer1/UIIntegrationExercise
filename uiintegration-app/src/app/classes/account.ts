//https://raw.githubusercontent.com/octokit/octokit.net/master/Octokit/Models/Response/Account.cs

import { Plan } from './plan';
import { AccountType } from './accountType';

export class Account {
    constructor(
        public AvatarUrl: string,
        public Bio: string,
        public Blog: string,
        public Collaborators: number,
        public Company: string,
        public CreatedAt: Date,
        public DiskUsage: number,
        public Email: string,
        public Followers: number,
        public Following: number,
        public Hireable: boolean,
        public HtmlUrl: string,
        public TotalPrivateRepos: number,
        public Id: number,
        public Location: string,
        public Login: string,
        public Name: string,
        public OwnedPrivateRepos: number,
        public Plan: Plan,
        public PrivateGists: number,
        public PublicGists: number,
        public PublicRepos: number,
        public Type: AccountType,
        public Url: string) { }
}