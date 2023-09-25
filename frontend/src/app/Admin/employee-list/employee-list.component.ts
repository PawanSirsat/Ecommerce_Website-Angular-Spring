import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { User } from 'src/app/models/User';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { ProductsService } from 'src/app/services/products.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public term : string
  public products : Product[]
  public isProductInCart : boolean
  public user : User
  product : Product
  name: any;
  searchText: any;
  productFilter: any = { name: '' };
 

  constructor(router : Router, route : ActivatedRoute,
       private productsService : ProductsService,
       private cartItemsService : CartItemsService,
       private usersService : UsersService
       ) { 
      this.term = route.snapshot.paramMap.get('term') || ""
  }

  ngOnInit(): void {
      this.productsService.getProducts().subscribe((products : Product[]) => {
          this.products = products

          for (let product of this.products) 
          {
              product.imageUrl = product.image ? 'data:image/jpeg;base64,' + product.image :
              "../../../assets/static/images/product-placeholder.png";
          }
      }, (error: ErrorEvent) => {
      })
  }

  addToCart () {
      this.cartItemsService.addToUserCart(this.user.id.toString(), this.product.id.toString()).subscribe(res => {
          this.getCartItem()
      })
  }

  getCartItem () 
  {
      this.cartItemsService.getCartItem(this.user.id.toString(), this.product.id.toString()).subscribe(res => {
          this.isProductInCart = true
      }, 
      (error : ErrorEvent) => {
          this.isProductInCart = false
      })
  }
  key = 'name';
  reverse:boolean = false;

sort(key: string){
this.key = key;
this.reverse = !this.reverse;
}

  // Search(){
  //     if(this.name == ""){
  //       this.ngOnInit();
  //     }else{
  //       this.product = this.product.filter(productsService => {
  //         return productsService.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
  //     })
  //   }
  // }
}
