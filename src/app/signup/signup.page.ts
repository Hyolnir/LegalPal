import { Component, OnInit } from '@angular/core';
import { FireserviceService } from '../fireservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public email: any;
  public password: any;
  public name: any;
  public reEnteredPassword: any;

  constructor(
    public router: Router,
    public fireService: FireserviceService
  ) { }

  ngOnInit() {
  }

  login() {
    this.router.navigateByUrl('login');
  }

  signup() {
    this.fireService.signup({ email: this.email, password: this.password }).then((res: any) => {

      if (this.password !== this.reEnteredPassword) {
        alert('Passwords do not match. Please re-enter.');
        return; // Stop signup process if passwords do not match
      }
      
      if (res && res.user && res.user.uid) {
        let data = {
          email: this.email,
          password: this.password,
          name: this.name,
          uid: res.user.uid
        };

        this.fireService.saveDetails(data).then(() => {
          alert('Account Created!');
          this.router.navigate(['/login'])
        }).catch(err => {
          console.log(err);
          // Handle error while saving details
        });
      } else {
        // Handle the case when res or res.user or res.user.uid is null or undefined
        console.log('User UID not found in the response');
      }
    }).catch(err => {
      alert(err.message);
      console.log(err);
      // Handle error during signup
    });
  }
}
