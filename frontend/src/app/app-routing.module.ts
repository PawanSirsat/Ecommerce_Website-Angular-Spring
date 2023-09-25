import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminPageComponent } from './Admin/admin-page/admin-page.component';
import { CreateEmployeeComponent } from './Admin/create-employee/create-employee.component';
import { CreateProductComponent } from './Admin/create-product/create-product.component';
import { EmployeeListComponent } from './Admin/employee-list/employee-list.component';
import { UserListComponent } from './Admin/user-list/user-list.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { GamingComponent } from './components/gaming/gaming.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegisterComponent } from './components/register/register.component';
import { SuccessComponent } from './components/success/success.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'shop', component: ProductListComponent},
    {path: 'shop/:term', component: ProductListComponent},
    {path: 'shop/products/:id', component: ProductDetailComponent},
    {path: 'account', component: UserDetailComponent},
    {path: 'cart', component: CartComponent},
    {path: 'home', component: HomeComponent},
    {path: 'admin-login', component: AdminLoginComponent},
    {path: 'admin-page', component: AdminPageComponent},
    {path: 'create-employee', component: CreateEmployeeComponent},
    {path: 'create-product', component: CreateProductComponent},
    {path: 'employee-list', component: EmployeeListComponent},
    {path: 'user-list', component: UserListComponent},
    {path: 'admin-home', component: AdminHomeComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'gaming', component: GamingComponent},
    {path: 'accessories', component: AccessoriesComponent},
    {path: 'payment', component: PaymentComponent},
    {path: 'success', component: SuccessComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
    constructor (router : Router) {}
}
