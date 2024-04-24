import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Token } from 'src/app/models/Token';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    public username : string;
    public password : string;
    public passwordConfirm : string;
    public email : string;
    public address : string;
    public phone : string;
    public name : string;

    public error : string

    constructor(private usersService : UsersService, private router : Router) { 
       
    }

    ngOnInit(): void {
        if (localStorage.getItem('token')) {
            this.router.navigateByUrl('/account')
        }
    }
  
     //Create required field validator for name
   
        RequiredForm = new FormGroup({
                namev : new FormControl('',[Validators.required, Validators.minLength(5), ]),
                phonev : new FormControl('',[Validators.required, Validators.pattern("[0-9]*"),Validators.minLength(10),Validators.maxLength(12)]),
                fullnamev : new FormControl('',[Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+"),Validators.minLength(7),Validators.maxLength(14)]),
                addressv : new FormControl('',[Validators.required,Validators.minLength(10)]),
                emailv : new FormControl('',[Validators.email, Validators.required]),
                passwordv : new FormControl('',[Validators.required,Validators.minLength(7)]),
                cpasswordv : new FormControl('',[Validators.required,Validators.minLength(7)])
              }) 
     

    register () {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*/
       

        this.error = ''

        if (!this.email || !this.email.match(emailRegex)) {
            this.error = "Email is not valid"
            return
        }

        if (this.password != this.passwordConfirm) {
            this.error = "Passwords do not match"
            return
        }

        

        this.usersService.register(
            this.username, this.password, this.email, this.email, this.address, this.phone).subscribe
            ((token : Token) => {
                localStorage.setItem('token', token.token);
                this.router.navigateByUrl('/account').then(() => window.location.reload())
            }, (error : ErrorEvent) => {
                this.error = error.error
            })
    }
    get namev():any
    {  
      return this.RequiredForm.get('namev');
    }
  
  
    get phonev():any
  {
      return this.RequiredForm.get('phonev') ;
    }

    get addressv():any
    {
        return this.RequiredForm.get('addressv') ;
      }

      get fullnamev():any
      {
          return this.RequiredForm.get('fullnamev') ;
        }
        get emailv():any
        {
            return this.RequiredForm.get('emailv') ;
          }
          get passwordv():any
          {
              return this.RequiredForm.get('passwordv') ;
            }
            get cpasswordv():any
            {
                return this.RequiredForm.get('cpasswordv') ;
              }
}
