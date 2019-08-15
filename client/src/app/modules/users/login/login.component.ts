import { Component, OnInit, DoCheck } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { environment } from "src/environments/environment";
import { UserService } from "src/app/services/users/user.service";
import { isNullOrUndefined } from "util";
import * as CryptoJS from "crypto-js";
import { Router } from "@angular/router";
import { LoginGuard } from "src/app/guards/login.guard";
import { UserModel } from 'src/app/models/user/UserModel';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit, DoCheck {
  constructor(
    private formBuilder: FormBuilder,
    private user: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.LoginForm = this.FormCreator();
    this.size = document.querySelector(".fo").clientWidth;
  }

  ngDoCheck() {
    let divcaptcha = document.querySelector("#recaptcha");
    if (isNullOrUndefined(divcaptcha)) {
      divcaptcha = document.querySelector("#g-recaptcha");
    }

    let sizeA = document.querySelector(".fo").clientWidth;
    if (sizeA < this.size) {
      divcaptcha.id = "g-recaptcha";
    } else {
      divcaptcha.id = "recaptcha";
    }
  }

  size = 0;
  key = environment.captchakey;
  captcha = false;
  LogErr = false;
  Forget = false;
  exist = true;

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

  public get recaptcha() {
    return this.LoginForm.get("recaptcha");
  }

  ReCaptcha() {
    this.captcha = !this.captcha;
  }

  NoCaptcha() {
    this.captcha = !this.captcha;
  }

  Ofus(data) {
    var hashed = CryptoJS.SHA256(data);
    var result = hashed.toString(CryptoJS.enc.Base64);
    return result;
  }

  forget() {
    this.Forget = !this.Forget;
  }

  verify() {
    let exist = false;
    this.user.GetUsers().subscribe(users => {
      for (let i = 0; i < users.length; i++) {
        if (users[i].email == this.email.value) {
          let emailAdresses = `${users[i].email}`;
          let password = window.btoa(Date.now().toString()).substr(0, 8);
          users[i].password = this.Ofus(password);
          let message = `Hi dear ${users[i].name} ${users[i].lastname}. <br><br> How did you request a password change, 
            we have processed your request, so your new loggin information is: <br>
              Email: ${emailAdresses}<br>
              Password: ${password}`;
          let subject = "Magazine-Vector password change";
          this.user.UpdateUser(users[i]).subscribe();
          this.user.SendEmail(message, subject, emailAdresses).subscribe(info => {
            alert('The verification email has been sent')
          });
          exist = true;
          break;
        }
      }
    });
    this.exist = exist;
  }

  Login() {
    let password = this.Ofus(this.password.value);
    this.user.Login(this.email.value, password).subscribe(user => {
      this.user.SaveUser(user["user"], user["id"]);
      if (user["user"]["rol"] == 1) {
        this.router.navigate(["/Autor/Home"]);
      } else if (user["user"]["rol"] == 3) {
        this.router.navigate(["/Editor/Home"]);
      } else if (user["user"]["rol"] == 2) {
        this.router.navigate(["/Evaluator/Home"]);
      }
    }, error => {
      this.LogErr = true;
    });
  }
}
