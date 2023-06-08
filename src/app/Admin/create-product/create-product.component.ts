import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { User } from 'src/app/models/User';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  msg = '';
  product : Product = new Product();
  productForm: any;
  constructor(private productsService: ProductsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  addProduct() {
    console.log();
    this.productsService.addProduct(this.product).subscribe(
      data => {
        this.router.navigate(['/product'])
        alert("Product Added Successfully")
      },
      error => {
        this.msg = "Product Alredy Added"
        // alert("Invalid Id Password")
      }
    );
  }
  
}

