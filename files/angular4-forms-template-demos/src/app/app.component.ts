import { User } from './User';
import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f')
  signupForm: NgForm;

  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];

  user = new User('', '', '', '', '');

  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';

  // resets signle vaule on form
  this.signupForm.form.patchValue({
    userData: {
      username: suggestedName
    }
  });
  }


  onSubmit() {
    this.submitted = true;
    console.log(this.signupForm.value);
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.signupForm.reset();
  }
}
