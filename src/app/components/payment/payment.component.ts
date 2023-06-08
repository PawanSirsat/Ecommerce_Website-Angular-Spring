import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/CartItem';
import { User } from 'src/app/models/User';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  
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

  RequiredForm = new FormGroup({
    cardv : new FormControl('' ,[Validators.required,Validators.pattern('[0-9]{16}')]),
    datev : new FormControl('' ,[Validators.required, Validators.pattern('[0-9]{2}')]),
    month : new FormControl('' ,[Validators.required, Validators.pattern('[0-9]{2}')]),
    cvv : new FormControl('' ,[Validators.required,Validators.pattern('[0-9]{3}')]),
    namev : new FormControl('',[Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+"),Validators.minLength(7),Validators.maxLength(12)]),

  }) 

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

get cardv():any
{  
  return this.RequiredForm.get('cardv');
}
get datev():any
{  
  return this.RequiredForm.get('datev');
}

get month():any
{  
  return this.RequiredForm.get('month');
}

get cvv():any
{  
  return this.RequiredForm.get('cvv');
}

get namev():any
{  
  return this.RequiredForm.get('namev');
}
}
