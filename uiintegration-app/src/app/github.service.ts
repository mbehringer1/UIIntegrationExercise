import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GithubService {
    private githubUrl: string = 'https://api.github.com/repos/angular/angular/issues';
    private emptyString: string = '';

    constructor(private http: Http) { }

    getIssues(dateString: string): Promise<string> {
        // https://api.github.com/repos/angular/angular/issues?since=2017-05-09
        var requestUrl = this.githubUrl;
        if (dateString != null && dateString != this.emptyString) {
            requestUrl += '?since=' + dateString;
        }

        return this.http.get(requestUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // copy pasted from tutorial.  Have to read up on this later.
        return Promise.reject(error.message || error);
    }
}