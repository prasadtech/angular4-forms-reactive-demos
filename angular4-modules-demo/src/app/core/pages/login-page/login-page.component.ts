import { AuthService } from '../../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {

  email: string = "test@example.org";
  password: string = "";

  modalMessage: string = null;

  constructor(
    private _router: Router,
    private _authService: AuthService
    ) { }

  ngOnInit() {
  }
  
  actionLogin(){
    if (this._authService.authenticate(this.email, this.password)) {
      this._router.navigate(['/']);
    } else {
      this.modalMessage = "E-mail or Password invalid.<br><br>Please, type: test@example.org / 123";
    }
  }

  actionCloseModal(){
    this.modalMessage = null;
  }
}
