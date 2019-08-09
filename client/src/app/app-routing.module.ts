import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./landing/home/home.component";
import { UsersModule } from "./modules/users/users.module";
import { LoginComponent } from "./modules/users/login/login.component";
import { SignupComponent } from "./modules/users/signup/signup.component";

const routes: Routes = [
  {
    path: "Home",
    component: HomeComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/Home"
  },
  {
    path: "Login",
    component: LoginComponent
  },
  {
    path: "Signup",
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), UsersModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
