//https://raw.githubusercontent.com/octokit/octokit.net/master/Octokit/Models/Response/User.cs

import { Account } from './account';
import { RepositoryPermissions } from './repositoryPermissions';
import { Plan } from './plan';
import { AccountType } from './accountType';

export class User extends Account {
    constructor(
        public avatar_url: string,
        public bio: string,
        public blog: string,
        public collaborators: number,
        public company: string,
        public created_at: Date,
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
        public url: string,
        public permissions: RepositoryPermissions,
        public site_admin: boolean,
        public ldap_distinguished_name: string,
        public suspended_at: Date
    ) {
        super(
            avatar_url,
            bio,
            blog,
            collaborators,
            company,
            created_at,
            disk_usage,
            email,
            followers,
            following,
            hireable,
            html_url,
            total_private_repos,
            id,
            location,
            login,
            name,
            owned_private_repos,
            plan,
            private_gists,
            public_gists,
            public_repos,
            type,
            url);
    }
}