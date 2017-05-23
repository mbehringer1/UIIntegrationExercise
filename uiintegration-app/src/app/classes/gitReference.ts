//https://raw.githubusercontent.com/octokit/octokit.net/master/Octokit/Models/Response/GitReference.cs

import { User } from './user';
import { Repository } from './repository';

export class GitReference {
    constructor(
        public url: string,
        public label: string,
        public ref: string,
        public sha: string,
        public user: User,
        public repository: Repository) { }
}