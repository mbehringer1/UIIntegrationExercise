//https://raw.githubusercontent.com/octokit/octokit.net/master/Octokit/Models/Response/Repository.cs

import { User } from './user';
import { RepositoryPermissions } from './repositoryPermissions';

export class Repository {
    constructor(
        public url: string,
        public html_url: string,
        public clone_url: string,
        public git_url: string,
        public ssh_url: string,
        public svn_url: string,
        public mirror_url: string,
        public id: number,
        public owner: User,
        public name: string,
        public full_name: string,
        public description: string,
        public homepage: string,
        public language: string,
        public _private: boolean,
        public fork: boolean,
        public forks_count: number,
        public stargazers_count: number,
        public default_branch: string,
        public open_issues_count: number,
        public pushed_at: Date,
        public created_at: Date,
        public updated_at: Date,
        public permissions: RepositoryPermissions,
        public parent: Repository,
        public source: Repository,
        public has_issues: boolean,
        public has_wiki: boolean,
        public has_downloads: boolean,
        public has_pages: boolean,
        public subscribers_count: number,
        public size: number,
        public allow_rebase_merge: boolean,
        public allow_squash_merge: boolean,
        public allow_merge_commit: boolean) { }
}