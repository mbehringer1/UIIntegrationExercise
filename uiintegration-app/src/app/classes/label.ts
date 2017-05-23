//https://raw.githubusercontent.com/octokit/octokit.net/master/Octokit/Models/Response/Label.cs

export class Label {
    constructor(
        public url: string,
        public name: string,
        public color: string
    ) { }
}