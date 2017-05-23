//https://raw.githubusercontent.com/octokit/octokit.net/master/Octokit/Models/Response/RepositoryPermissions.cs

export class RepositoryPermissions {
    constructor(
        public admin: boolean,
        public push: boolean,
        public pull: boolean
    ) { }
}