import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit() {
    this.SignUPForm = this.CreatorForm();
  }

  SignUPForm: FormGroup;

  CreatorForm(): FormGroup;

  CreatorForm(): FormGroup {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      secondname: new FormControl(''),
      lastname: new FormControl('', [Validators.required]),
      secondlastname: new FormControl(''),
      country: new FormControl('', [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      afiliation: new FormControl('', [Validators.required]),
      formation: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      re_pass: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    })
  }

  public get name() {
    return this.SignUPForm.get('name');
  }

  public get secondname() {
    return this.SignUPForm.get('secondname');
  }

  public get lastname() {
    return this.SignUPForm.get('lastname');
  }

  public get secondlastname() {
    return this.SignUPForm.get('secondlastname');
  }

  public get country() {
    return this.SignUPForm.get('country');
  }

  public get phone() {
    return this.SignUPForm.get('phone');
  }

  public get afiliation() {
    return this.SignUPForm.get('afiliation');
  }

  public get formation() {
    return this.SignUPForm.get('formation');
  }

  public get password() {
    return this.SignUPForm.get('password');
  }

  public get re_pass() {
    return this.SignUPForm.get('re_pass');
  }

  public get email() {
    return this.SignUPForm.get('email');
  }

  SetFormation(Formation) {
    console.log(Formation);
    this.SignUPForm.patchValue({ formation: Formation });
  }

  SignUp() {
    this.user.Register(this.name.value, this.secondname.value, this.lastname.value, this.secondlastname.value,
      this.country.value, this.phone.value, this.afiliation.value, this.formation.value, this.email.value,
      this.password.value, 1).subscribe(user => {
        alert(`The user ${user.name} ${user.lastname} has been registered!`);
      });
  }


}
