import { Component } from '@angular/core';
import { Router } from '@angular/router';


/**
 * @title Menu positioning
 */
@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
})
export class MenuComponent {

  constructor(private router: Router) { }

  selectOption(option: string) {
    if (option === 'response') {
      this.router.navigate(['response']);
    } else if (option === 'poll') {
      this.router.navigate(['poll']);
    }

  }
}