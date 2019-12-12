import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { RegistrationService } from "src/app/service/registration.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

 loading = false;
 username = ''
  password = ''
  email=''
  phone=''
  invalidLogin = false
  errors=null;
 
  constructor(private router: Router,
    private registrationservice: RegistrationService) {
     
     }

  ngOnInit() {
  
  }

 completeRegistration() {
 debugger;
 this.registrationservice.register(this.username, this.password,this.email,this.phone).subscribe(
      data => {
        this.router.navigate(['login'])
        this.invalidLogin = false
      },
      error => {
        this.errors = error

      }
    );
           alert('SUCCESS!! :-)\n\n');

  }

}