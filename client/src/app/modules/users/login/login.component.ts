import { Component, OnInit, DoCheck } from "@angular/core";
import {
  FormBuilder,
  Validators,
  FormGroup,
} from "@angular/forms";
import { environment } from "src/environments/environment";
import { UserService } from 'src/app/services/users/user.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit, DoCheck {
  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit() {
    this.LoginForm = this.FormCreator();
    this.size = document.querySelector('.fo').clientWidth;
  }

  ngDoCheck() {
    let divcaptcha = document.querySelector('#recaptcha');
    if (isNullOrUndefined(divcaptcha)) {
      divcaptcha = document.querySelector('#g-recaptcha');
    }

    let sizeA = document.querySelector('.fo').clientWidth;
    if (sizeA < this.size) {
      divcaptcha.id = 'g-recaptcha';
    } else {
      divcaptcha.id = 'recaptcha';
    }
  }

  size = 0;
  key = environment.captchakey;
  captcha = false;

  LoginForm: FormGroup;

  FormCreator(): FormGroup;

  FormCreator(): FormGroup {
    return this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      recaptcha: ["", Validators.required]
    });
  }

  public get email() {
    return this.LoginForm.get("email");
  }

  public get password() {
    return this.LoginForm.get("password");
  }

  ReCaptcha() {
    this.captcha = !this.captcha;
  }

  NoCaptcha() {
    this.captcha = !this.captcha;
  }

  Login() {
    this.user.Login(this.email.value, this.password.value).subscribe(user => {
      this.user.SaveUser(user['user'], user['id']);
    });
  }
}
