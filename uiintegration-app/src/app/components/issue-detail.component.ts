import { Component, Input } from '@angular/core';
import { Issue } from '../classes/issue';

@Component({
    selector: "issue-detail",
    templateUrl: "../templates/issue-detail.component.html"
})
export class IssueDetail {
    @Input() issue: Issue;
}