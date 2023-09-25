import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCaretUp, faCaretDown, faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { CartItem } from 'src/app/models/CartItem';
import { User } from 'src/app/models/User';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { UsersService } from 'src/app/services/users.service';
import { Token } from 'src/app/models/Token';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    caretUp = faCaretUp;
    caretDown = faCaretDown;
    
    marker = faMapMarkerAlt;
    phoneIcon = faPhoneAlt

    editMode : boolean = false;

    name : string;
    username : string;
    email : string;
    address : string;
    phone : string;

    user : User
    cartItems : CartItem[]

    constructor(
        private router : Router, 
        private usersService : UsersService,
        private cartItemsService : CartItemsService
    ) { }

    ngOnInit(): void {
        if (!localStorage.getItem('token')) {
            this.router.navigateByUrl('/login')
            return
        }

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

    updateUser () {
        this.usersService.updateUser(this.user.id.toString(), this.username, this.user.password, this.email, this.name, this.address, this.phone).subscribe((user : User) => {
            this.usersService.createToken(user.username).subscribe((token : Token) => {
                localStorage.removeItem('token')
                console.log(localStorage.getItem('token'));
                localStorage.setItem('token', token.token)
                console.log(localStorage.getItem('token'));
                this.router.navigateByUrl('/payment')
            })
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

    increaseQuantity (item : CartItem) {
        this.cartItemsService.updateUserCartItem(
            this.user.id.toString(), item.product.id.toString(), item.quantity + 1).subscribe(res => {
            console.log(res)
            this.getItems()
        })
    }

    decreaseQuantity (item : CartItem) {
        if (item.quantity - 1 <= 0) {
            this.cartItemsService.deleteUserCartItem(this.user.id.toString(), item.product.id.toString()).subscribe(res => {
                console.log(res)
                this.getItems()
            })
        } else {
            this.cartItemsService.updateUserCartItem(
                this.user.id.toString(), item.product.id.toString(), item.quantity - 1).subscribe(res => {
                console.log(res)
                this.getItems()
            })
        }
    }
}
