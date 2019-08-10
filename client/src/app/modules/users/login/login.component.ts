import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  Validators,
  FormGroup,
} from "@angular/forms";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.LoginForm = this.FormCreator();
  }

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
}
