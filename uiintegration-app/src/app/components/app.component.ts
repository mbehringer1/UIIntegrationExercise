import { Component, AfterViewChecked } from '@angular/core';
import { GithubService } from '../providers/github.service';
import { PrettyJsonComponent } from 'angular2-prettyjson';

import { Issue } from '../classes/issue';

@Component({
  selector: 'app-root',
  templateUrl: '../templates/app.component.html',
  styleUrls: ['../styles/app.component.css'],
  providers: [GithubService]
})
export class AppComponent implements AfterViewChecked {
  emptyString: string = '';
  title: string = 'UITest App';
  today: Date = new Date();
  datePicked: string = '';
  issues: Issue[];

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
    this.githubService
      .getIssues(this.datePicked)
      .then(result => this.issues = result);

    var xxx = this.today.getDate() - new Date(this.datePicked).getDate();
  }

  idClicked(event, id): void {
    var issue = this.issues.find(x => x.id == id);
    var htmlSnippet = document.getElementById(id + 'body');
    if (htmlSnippet.style.display == "block") {
      htmlSnippet.style.display = "none";
    }
    else {
      htmlSnippet.style.display = "block";
    }
  }

  bodyClicked(event, id): void {
    var htmlSnippet = document.getElementById(id + 'body');
    //maybe a scroll to or something.
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
    // PR.prettyPrint();
    //Never got around to this one ... maybe another time.
  }
}