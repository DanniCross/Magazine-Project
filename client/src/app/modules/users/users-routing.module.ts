import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AutorModule } from "../autor/autor.module";
import { LoginComponent } from './login/login.component';
import { LoginGuard } from 'src/app/guards/login.guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: "Login",
    component: LoginComponent,
    canActivate: [
      LoginGuard
    ]
  },
  {
    path: "Signup",
    component: SignupComponent,
    canActivate: [
      LoginGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), AutorModule],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
