import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { User } from 'src/app/models/User';
import { CartItemsService } from 'src/app/services/cart-items.service';
import { ProductsService } from 'src/app/services/products.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    public term : string
    public products : Product[]
    public isProductInCart : boolean
    public user : User
    product : Product
    name: any;
    searchText: any;
    productFilter: any = { name: '' };
    public imgurl: string = "https://static-ecapac.acer.com/media/catalog/product/cache/a2e755bb2f5b00fa33d64eface9107e3/n/i/nitro5_an515-57_primary_image_3_2_4_2.jpg";
   

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

            for (let product of this.products) {
                product.imageUrl = product.image ? 'data:image/jpeg;base64,' + product.image :
                "../../../assets/static/images/product-placeholder.png";
                
            }
        }, (error: ErrorEvent) => {
        })

        this.usersService.getUserByToken().subscribe((user : User) => {
            this.user = user
            console.log(this.user.id);

            this.getCartItem()
        }, (error : ErrorEvent) => {
            console.log(error)
        })
    }

    addToCart () {
        this.cartItemsService.addToUserCart(this.user.id.toString(), this.product.id.toString()).subscribe(res => {
            this.getCartItem()
        })
    }

    getCartItem () {
        this.cartItemsService.getCartItem(this.user.id.toString(), this.product.id.toString()).subscribe(res => {
            this.isProductInCart = true
        }, (error : ErrorEvent) => {
            this.isProductInCart = false
        })
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
