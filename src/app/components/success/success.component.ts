import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/CartItem';
import { User } from 'src/app/models/User';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

   
  cartItems : CartItem[]
  user : User
  name : string;
  username : string;
  email : string;
  address : string;
  phone : string;

  constructor(  private router : Router, 
    private usersService : UsersService,
    private cartItemsService : CartItemsService) { }

  ngOnInit(): void {
    this.usersService.getUserByToken().subscribe((user : User) => {
      this.user = user;

      this.name = user.name;
          this.username = user.username;
          this.email = user.email;
          this.address = user.address;
          this.phone = user.phone;
      this.getItems()
  }, (error : ErrorEvent) => {
      console.log(error)
  })
  }

  getItems () {
    this.cartItemsService.getUserCart(this.user.id.toString()).subscribe((cartItems : CartItem[]) => {
        this.cartItems = cartItems;
        
    })
}

  getTotal () : Number {
    var reducer = ( acc ,  val) => acc + val;
    return this.cartItems ? this.cartItems.map((item) => item.totalPrice).reduce(reducer) : 0.0
}

onSubmit () {
  this.router.navigateByUrl('/success')
}
}

