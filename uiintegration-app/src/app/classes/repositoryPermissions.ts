//https://raw.githubusercontent.com/octokit/octokit.net/master/Octokit/Models/Response/RepositoryPermissions.cs

export class RepositoryPermissions {
    constructor(
        public Admin: boolean,
        public Push: boolean,
        public Pull: boolean
    ) { }
}