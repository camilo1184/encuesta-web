import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../model/User';
import { LoginService } from '../service/LoginService';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StorageService } from '../service/StorageService';

@Component({
  selector: 'my-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService,
    private dialog: MatDialog,
    private router: Router,
    private storageService: StorageService){
  }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog, {
    });
  }

  user = new User;

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.user.userName = this.form.controls.username.value;
      this.user.password = this.form.controls.password.value;

      this.loginService.authenticateUser(this.user).subscribe(data => {
        if (data != null){
          this.storageService.setItem('user', data);
          this.router.navigate(['home']);
        } else {
          this.openDialog();
        }
      });
      
    }
  }

}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {}