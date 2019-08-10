import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  constructor(private user: UserService) { }

  ngOnInit() {
    this.Logged();
  }

  ngDoCheck() {
    this.Logged();
  }

  username = '';
  logged = false;
  active = false;
  info = false;

  Activate() {
    this.active = !this.active;
  }

  Logged() {
    let user = this.user.getUserInfo();
    if (!isNullOrUndefined(user)) {
      this.logged = true
      this.username = `${user['name']} ${user['lastname']}`;
    }
  }

  Logout() {
    this.logged = !this.logged;
    this.info = !this.info;
    localStorage.removeItem('TokenID');
    localStorage.removeItem('UserInfo');
  }

  Info() {
    return this.info = !this.info;
  }


}
