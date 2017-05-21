//https://raw.githubusercontent.com/octokit/octokit.net/master/Octokit/Models/Response/User.cs

import { Account } from './account';
import { RepositoryPermissions } from './repositoryPermissions';
import { Plan } from './plan';
import { AccountType } from './accountType';

export class User extends Account {
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
        public Url: string,
        public Permissions: RepositoryPermissions,
        public SiteAdmin: boolean,
        public LdapDistinguishedName: string,
        public SuspendedAt: Date
    ) {
        super(
            AvatarUrl,
            Bio,
            Blog,
            Collaborators,
            Company,
            CreatedAt,
            DiskUsage,
            Email,
            Followers,
            Following,
            Hireable,
            HtmlUrl,
            TotalPrivateRepos,
            Id,
            Location,
            Login,
            Name,
            OwnedPrivateRepos,
            Plan,
            PrivateGists,
            PublicGists,
            PublicRepos,
            Type,
            Url);
    }
}