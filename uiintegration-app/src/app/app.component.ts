import { Component } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GithubService]
})
export class AppComponent {
  emptyString: string = '';
  title: string = 'UITest App';
  today: Date = new Date();
  datePicked: string = '';
  issues: string;

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
  }
}