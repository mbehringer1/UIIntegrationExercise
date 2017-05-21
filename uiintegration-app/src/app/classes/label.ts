//https://raw.githubusercontent.com/octokit/octokit.net/master/Octokit/Models/Response/Label.cs

export class Label {
    constructor(
        public Url: string,
        public Name: string,
        public Color: string
    ) { }
}