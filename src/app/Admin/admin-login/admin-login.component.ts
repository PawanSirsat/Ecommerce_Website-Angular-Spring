import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/Admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin = new Admin();
  msg = '';

  constructor(private loginuserservice: AdminService,
              private router: Router,) { }

  ngOnInit(): void {
  }

  adminLogin(emailId: any){
    this.loginuserservice.loginAdminRemote(this.admin).subscribe(
      data => 
      {
        this.router.navigate(['admin-page'])
        localStorage.setItem('token1', emailId);

        alert('Successfully LoggedIn !');
      },
      error =>
      {
        this.router.navigate(['admin-page'])
        alert('Invalid !');
        // alert("Invalid Id Password")
      }
    )
  
    }

}

