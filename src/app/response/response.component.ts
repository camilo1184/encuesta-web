import { Component, OnInit } from '@angular/core';
import { PollService } from '../service/PollService';
import { Poll } from '../model/Poll';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {

  polls: Poll[] = [];
  dataSource: any;
  displayedColumns: string[] = ['numberId', 'email', 'coments', 'brandType', 'date', 'delete'];

  constructor(private pollService: PollService,
    private dialog: MatDialog) { }
 

  ngOnInit(): void {
    this.loadPolls();
  }

  loadPolls() {
    this.pollService.findPolls().subscribe((response: Poll[]) => {
      this.polls = response;
      this.dataSource = response;
    });
  }

  deletePoll(id:string) {
    this.pollService.deletedPoll(id).subscribe((response: Poll[]) => {
      this.polls = response;
      this.dataSource = response;
      this.openDialog()
    });
  }

  openDialog() {
    this.dialog.open(DialogElementsSucessDelete, {
    });
  }

}

@Component({
  selector: 'dialog-delete',
  templateUrl: 'dialog-delete.html',
})
export class DialogElementsSucessDelete {}
