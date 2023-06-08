import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from './models/CartItem';
import { User } from './models/User';
import { CartItemsService } from './services/cart-items.service';
import { UsersService } from './services/users.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'frontend';
    public term : string
    public isTokenThere : boolean
    cartItems : CartItem[]
    user : User;

    constructor(private router: Router,
        private usersService : UsersService,
        private cartItemsService : CartItemsService) 
    {
        console.log("Token:  " + localStorage.getItem('token'));
        this.isTokenThere = localStorage.getItem('token') != null
    }

    ngOnInit(): void
     {
        if (!localStorage.getItem('token')) 
        {
            this.router.navigateByUrl('/login')
            return
        }

        this.usersService.getUserByToken().subscribe((user : User) => 
        {
            this.user = user;
            this.getItems()
        }, (error : ErrorEvent) => {
            console.log(error)
        })
    }

    search () 
    {
        this.router.navigate(["/shop", this.term]).then(() => window.location.reload())
    }

    getItems () 
    {
        this.cartItemsService.getUserCart(this.user.id.toString()).subscribe((cartItems : CartItem[]) =>
        {
            this.cartItems = cartItems;
            
        })
    }
}
