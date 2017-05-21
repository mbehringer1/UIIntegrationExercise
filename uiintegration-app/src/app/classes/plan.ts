//https://raw.githubusercontent.com/octokit/octokit.net/master/Octokit/Models/Response/Plan.cs

export class Plan {
    constructor(
        public Collaborators: number,
        public Name: string,
        public PrivateRepos: number,
        public Space: number,
        public BillingEmail: string) { }
}