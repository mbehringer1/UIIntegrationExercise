//https://raw.githubusercontent.com/octokit/octokit.net/master/Octokit/Models/Response/Account.cs

import { Plan } from './plan';
import { AccountType } from './accountType';

export class Account {
    constructor(
        public avatar_url: string,
        public bio: string,
        public blog: string,
        public collaborators: number,
        public company: string,
        public createdAt: Date,
        public disk_usage: number,
        public email: string,
        public followers: number,
        public following: number,
        public hireable: boolean,
        public html_url: string,
        public total_private_repos: number,
        public id: number,
        public location: string,
        public login: string,
        public name: string,
        public owned_private_repos: number,
        public plan: Plan,
        public private_gists: number,
        public public_gists: number,
        public public_repos: number,
        public type: AccountType,
        public url: string) { }
}