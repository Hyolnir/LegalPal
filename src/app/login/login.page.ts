import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireserviceService } from '../fireservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email: any;
  public password: any;

  constructor(
    public router: Router,
    public fireService: FireserviceService
  ) { }

  ngOnInit() {
  }

  login() {
    this.fireService.loginWithEmail({ email: this.email, password: this.password }).then((res: any) => {
      console.log(res);
      if (res && res.user && res.user.uid) {
        this.fireService.getDetails({ uid: res.user.uid }).subscribe(
          (details: any) => {
            console.log(details);
            if (details && details.name) {
              this.router.navigate(['/legal-pal'])
            }
          },
          err => {
            console.log(err);
          }
        );
      } else {
        alert('User information not found.');
      }
    }).catch(err => {
      alert(err.message);
      console.log(err);
    });
  }

  signup() {
    this.router.navigateByUrl('signup');
  }
}
