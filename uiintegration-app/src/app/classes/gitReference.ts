//https://raw.githubusercontent.com/octokit/octokit.net/master/Octokit/Models/Response/GitReference.cs

import { User } from './user';
import { Repository } from './repository';

export class GitReference {
    constructor(
        public Url: string,
        public Label: string,
        public Ref: string,
        public Sha: string,
        public User: User,
        public Repository: Repository) { }
}