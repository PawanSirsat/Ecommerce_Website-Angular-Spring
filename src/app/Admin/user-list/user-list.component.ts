import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users!: User[];
  name:any;

  constructor(private usersservice: UsersService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUser();
  }

  private getUser(){
    this.usersservice.getUsers().subscribe(data => {
      this.users = data;
    });
  }
  Search(){
    if(this.name == ""){
      this.ngOnInit();
    }else{
      this.users = this.users.filter(loginuserservice => {
        return loginuserservice.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    })
  }
}

key = 'name';
reverse:boolean = false;

sort(key: string){
this.key = key;
this.reverse = !this.reverse;
}
   
 

  // updateEmployee(id: number){
  //   this.router.navigate(['usere', id]);
  // }

 
}