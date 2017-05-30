import { Component } from '@angular/core';
import { GithubService } from '../providers/github.service';
import { PrettyJsonComponent } from 'angular2-prettyjson';

import { Issue } from '../classes/issue';

@Component({
  selector: 'app-root',
  templateUrl: '../templates/app.component.html',
  styleUrls: ['../styles/app.component.css'],
  providers: [GithubService]
})
export class AppComponent {
  emptyString: string = '';
  title: string = 'UITest App';
  today: Date = new Date();
  datePicked: string = '';
  issues: Issue[];
  selectedIssue: Issue;

  constructor(private githubService: GithubService) {

    if (this.datePicked == null || this.datePicked == this.emptyString) {
      var oneWeekAgo: Date = new Date();
      oneWeekAgo.setDate(this.today.getDate() - 7);
      this.datePicked = oneWeekAgo.toISOString().substring(0, 10);
    }
    this.go(event);
  }

  go(event): void {
    if (event != null) {
      var selectedDate = event.target.value as string;
      if (selectedDate != null && selectedDate != this.emptyString) {
        this.datePicked = selectedDate;
      }
    }

    this.selectedIssue = null;
    this.githubService
      .getIssues(this.datePicked)
      .then(result => this.issues = result);

    //save this for later.  going to create a different routine based on date duration.
    //var xxx = this.today.getDate() - new Date(this.datePicked).getDate();
  }

  onSelect(issue: Issue): void {
    this.selectedIssue = issue;
  }
}