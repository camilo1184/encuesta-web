import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ListService } from '../service/ListService';
import { Brand } from '../model/Brand';
import { Poll } from '../model/Poll';
import { PollService } from '../service/PollService';
import { User } from '../model/User';
import { MatDialog } from '@angular/material/dialog';
import { StorageService } from '../service/StorageService';


@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {

  brands: Brand[] = [];
  poll = new Poll();
  brand: any;

  constructor(private listService: ListService,
    private pollService: PollService,
    private dialog: MatDialog,
    private storageService: StorageService) { }

  form: FormGroup = new FormGroup({
    numberId: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    coments: new FormControl(''),
    brand: new FormControl(['']),
    dateResponse: new FormControl('')
  });


  ngOnInit(): void {
    this.loadStates();
    this.poll.user = new User();
    this.poll.brandType = new Brand();
    this.poll.user.id = this.storageService.getItem('user').id;
  }

  loadStates() {
    this.listService.findListPcs().subscribe(response => {
      this.brands = response;
    });
  }

  submit() {
    this.pollService.savePoll(this.poll).subscribe(response => {
      this.poll = new Poll();
      this.poll.user = new User();
      this.poll.brandType = new Brand();
      this.poll.user.id = this.storageService.getItem('user').id;
      this.openDialog()
    });
  }

  openDialog() {
    this.dialog.open(DialogElementsSucess, {
    });
  }

}


@Component({
  selector: 'dialog-success',
  templateUrl: 'dialog-success.html',
})
export class DialogElementsSucess {}
