//https://raw.githubusercontent.com/octokit/octokit.net/master/Octokit/Models/Response/Plan.cs

export class Plan {
    constructor(
        public collaborators: number,
        public name: string,
        public private_repos: number,
        public space: number,
        public billing_email: string) { }
}